const processPostback = require("../processes/postback");
const text = require("../processes/text");
const axios = require("axios");

module.exports = async function (app, bot) {
  app.get("/webhook", function (req, res) {
    if (req.query["hub.verify_token"] === process.env["VERIFY_TOKEN"]) {
      console.log("webhook verified");
      res.status(200).send(req.query["hub.challenge"]);
    } else {
      console.error("verification failed. Token mismatch.");
      res.sendStatus(403);
    }
  });

  app.post("/webhook", function (req, res) {
    //checking for page subscription.
    if (req.body.object === "page") {
      /* Iterate over each entry, there can be multiple entries 
       if callbacks are batched. */
      req.body.entry.forEach(function (entry) {
        if (entry.messaging) {
          // Iterate over each messaging event
          entry.messaging.forEach(async function (event) {
            const senderID = event.sender.id;
            //mark seen
            if (event.message && !event.message.is_echo) {
              await bot.markSeen(senderID);
            }
            if (event.messaging_feedback) {
              const profile = await bot.getUserProfile(senderID);

              const ans =
                event.messaging_feedback.feedback_screens[0].questions.exp;
              await bot.fbdb.push(`feedback.${ans.payload}`, `${senderID}`);
              if (ans.follow_up.payload) {
                await bot.fbdb.push(`wrotefeedbacks`, {
                  id: senderID,
                  name: profile.name,
                  wrote: ans.follow_up.payload,
                });
              }
              //send to discord
              var discordUrl = bot.condig.discordWebhook; //discord webhook url

              var params = {
                content: `<t:${Math.floor(event.timestamp / 1000)}:R>`,
                embeds: [
                  {
                    author: {
                      name: `${profile.name} rated ${ans.payload}!`,
                      icon_url: `${profile.profilePic}`,
                    },
                    description: `${
                      ans.payload == 1
                        ? "😞"
                        : ans.payload == 2
                        ? "🙁"
                        : ans.payload == 3
                        ? "😐"
                        : ans.payload == 4
                        ? "🙂"
                        : ans.payload == 5
                        ? "😀"
                        : "🌟"
                    }${ans.follow_up ? " - " + ans.follow_up.payload : " "}`,
                    footer: {
                      text: `${profile.id}`,
                    },
                    color: `${
                      ans.payload < 3
                        ? 16711680
                        : ans.payload > 2 && ans.payload < 5
                        ? 16574595
                        : 65280
                    }`,
                  },
                ],
              };

              await axios.post(discordUrl, params).catch(function (error) {
                console.log(error.response.status);
              });
            }

            if (event.pass_thread_control) {
              if (
                event.pass_thread_control.new_owner_app_id === 1156467861849015
              ) {
                let payload = "BackToBot";
                processPostback(bot, event, payload);
              }
            }
            if (event.postback) {
              let payload = event.postback.payload;
              processPostback(bot, event, payload);
            }
            if (event.message) {
              if (event.message.quick_reply) {
                let payload = event.message.quick_reply.payload;
                processPostback(bot, event, payload);
              } else if (!event.message.quick_reply && event.message.text) {
                text(bot, event);
              }
            }
          });
        }
      });
      res.sendStatus(200);
    }
  });
};
