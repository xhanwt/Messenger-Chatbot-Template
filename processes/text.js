const checkUser = require("../scripts/checkUser");
const n = new Date();
const d = n.getDay();
const h = n.getHours();
const m = n.getMinutes();
const t = h * 60 + m;
const open = 3 * 60 + 30;
const closed = 12 * 60 + 30;
module.exports = async function processPostback(bot, event) {
  const senderID = event.sender.id;
  const sentText = event.message.text;

  function firstTrait(nlp, name) {
    return nlp && nlp.entities && nlp.traits[name] && nlp.traits[name][0];
  }
  const message = event.message;

  // check greeting is here and is confident
  const greeting = firstTrait(message.nlp, "wit$greetings");
  //
  let list = await bot.db.get("waitingList.users");
  let listSummary = await bot.db.get("waitingSummary.users");
  //
  if (list && list.includes(senderID)) {
    await bot.db.pull("waitingList.users", senderID);
    const m = message;
    let funName = "results";
    checkUser(bot, senderID, funName, m);
  } else if (greeting && greeting.confidence > 0.8) {
    let funName = "greets";
    checkUser(bot, senderID, funName);
  } else if (
    sentText.toLowerCase() === "agent" ||
    sentText === "ကိုယ်စားလှယ်"
  ) {
    if (d > 0 && t >= open && t <= closed) {
      let funName = "agentDetails";
      checkUser(bot, senderID, funName);
    } else {
      let funName = "agentDetailsOff";
      checkUser(bot, senderID, funName);
    }
  } else if (listSummary && listSummary.includes(senderID)) {
    await bot.db.pull("waitingSummary.users", senderID);
    let funName = "received";
    checkUser(bot, senderID, funName);
  } else if (!message.is_echo) {
    // default logic
    let funName = "notRecognised";
    checkUser(bot, senderID, funName);
  }
};
