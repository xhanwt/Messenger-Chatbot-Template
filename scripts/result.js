const axios = require("axios");
module.exports = async function notRecognised(bot, senderID, userLang, m) {
  await bot.typingOn(senderID);

  /* ### EXAMPLE GETTING DATA API FROM A PLATFORM LIKE EDX.ORG (SAME AS OPEN EDX API) ### */
  await axios
    .get("https://burma.ac/api/courses/v1/courses?search_term=" + m.text)
    .then(async function (response) {
      const results = response.data.results;
      if (results.length === 0) {
        await bot.sendMessage(
          senderID,
          {
            quickReplies: [
              {
                content_type: "text",
                payload: "find",
                title: bot.lang.findMoreThings[userLang],
              },
              {
                content_type: "text",
                payload: "RE_STARTED",
                title: bot.lang.menu[userLang],
              },
            ],
            text: bot.lang.nthFound[userLang],
          },
          { messagingType: "RESPONSE", personaId: bot.lang.personaID }
        );
      } else if (results.length > 0) {
        let templates = [];
        for (let i = 0; i < 10 ? i < results.length : i < 9; i++) {
          templates.push({
            buttons: [
              {
                title: "Learn More",
                type: "web_url",
                url: `https://burma.ac/courses/${results[i].id}/about`,
                webviewHeightRatio: "full",
              },
            ],
            imageUrl: results[i].media.image.small,
            subtitle: `Org: ${results[i].org}\nNumber: ${results[i].number} \nPacing: ${results[i].pacing}`,
            title: `${results[i].name}`,
            default_action: {
              type: "web_url",
              url: `https://burma.ac/courses/${results[i].id}/about`,
            },
          });
        }
        /* await templates.push({
          buttons: [
            {
              title: "SEARCH MORE",
              type: 'POSTBACK',
              payload: `find`
            }, {
              title: "SEARCH ON OUR WEBSITE",
              type: 'web_url',
              url: ``,
              webviewHeightRatio: "full"
            },
          ],
          imageUrl: 'https://i.imgur.com/',
          subtitle: ``,
          title: ``,
          default_action: {
            type: "web_url",
            url: ``
          }
        }); */

        await bot.typingOn(senderID);
        await bot.sendGenericTemplate(senderID, templates.reverse(), {
          imageAspectRatio: "horizontal",
          messagingType: "RESPONSE",
          personaId: bot.lang.personaID,
        });
        await bot.sendMessage(
          senderID,
          {
            quickReplies: [
              {
                content_type: "text",
                payload: "find",
                title: bot.lang.findMoreThings[userLang],
              },
              {
                content_type: "text",
                payload: "RE_STARTED",
                title: bot.lang.menu[userLang],
              },
            ],
            text: bot.lang.moreOnWeb[userLang],
          },
          { messagingType: "RESPONSE", personaId: bot.lang.personaID }
        );
      }
    })
    .catch(async function (error) {
      console.log(error.message);
      await bot.typingOn(senderID);
      await bot.sendMessage(senderID, "Service unavailable.", {
        messagingType: "RESPONSE",
        personaId: bot.lang.personaID,
      });
    });
};
