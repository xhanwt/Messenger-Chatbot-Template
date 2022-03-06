const greets = require("../scripts/greets");
const lang = require("../scripts/lang");
const qa = require("../scripts/ques");
const ans = require("../scripts/ans");
const agentDetails = require("../scripts/agentDetails");
const agentDetailsOff = require("../scripts/agentDetailsOff");
const agentContact = require("../scripts/agentContact");
const agentContactSave = require("../scripts/agentContactSave");
const ask = require("../scripts/ask");
const findAsk = require("../scripts/findAsk");
const notRecognised = require("../scripts/notRecognised");
const btb = require("../scripts/btb");
const received = require("../scripts/received");
const result = require("../scripts/result");

module.exports = async function checkUser(bot, senderID, funName, m) {
  let userLang = await bot.db.get(`${senderID}`);

  if (!userLang) {
    lang(bot, senderID);
  } else if (userLang) {
    userLang = userLang.userLang;
    if (funName === "greets") {
      await greets(bot, senderID, userLang);
      await ask(bot, senderID, userLang);
    }
    if (funName === "justask") {
      ask(bot, senderID, userLang);
    }
    if (funName === "qa") {
      qa(bot, senderID, userLang);
    }
    if (funName === "agentDetails") {
      agentDetails(bot, senderID, userLang);
    }
    if (funName === "agentDetailsOff") {
      agentDetailsOff(bot, senderID, userLang);
    }
    if (funName === "agentContact") {
      agentContact(bot, senderID, userLang);
    }
    if (funName === "agentContactSave") {
      agentContactSave(bot, senderID, userLang);
    }
    if (funName === "findASK") {
      findAsk(bot, senderID, userLang);
    }
    if (funName === "notRecognised") {
      notRecognised(bot, senderID, userLang);
    }
    if (funName === "BTB") {
      btb(bot, senderID, userLang);
    }
    if (funName === "received") {
      received(bot, senderID, userLang);
    }
    if (funName === "ans") {
      ans(bot, senderID, userLang, m);
    }
    if (funName === "results") {
      result(bot, senderID, userLang, m);
    }
  }
};
