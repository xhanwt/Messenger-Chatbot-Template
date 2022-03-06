const checkUser = require("../scripts/checkUser");
const greets = require("../scripts/greets");
const ask = require("../scripts/ask");
const lang = require("../scripts/lang");
const n = new Date();
const d = n.getDay();
const h = n.getHours();
const m = n.getMinutes();
const t = h * 60 + m;

module.exports = async function processPostback(bot, event, payload) {
  //office
  const open = bot.config.open;
  const closed = bot.config.closed;
  //
  const senderID = event.sender.id;
  let list = await bot.db.get("waitingList.users");
  if (list && list.includes(senderID)) {
    await bot.db.pull("waitingList.users", senderID);
  }

  if (payload === "GET_STARTED") {
    let funName = "greets";
    checkUser(bot, senderID, funName);
  }
  if (payload === "RE_STARTED") {
    let funName = "justask";
    checkUser(bot, senderID, funName);
  }
  if (payload === "LANGUAGE") {
    lang(bot, senderID);
  }
  if (payload === "setEng") {
    userLang = "eng";
    let menu = [
      {
        locale: "default",
        callToActions: [
          {
            title: "Main Menu",
            type: "postback",
            payload: "RE_STARTED",
          },
          {
            title: "Find Things",
            type: "postback",
            payload: "find",
          },
          {
            title: "Info",
            type: "postback",
            payload: "qa",
          },
          {
            title: "Live Agent",
            type: "postback",
            payload: "agentDetails",
          },
          {
            title: "Language",
            type: "postback",
            payload: "LANGUAGE",
          },
          {
            title: "Website",
            type: "web_url",
            url: "https://",
            webviewHeightRatio: "tall",
          },
        ],
      },
    ];
    await bot.db.set(`${senderID}`, { userLang });
    await greets(bot, senderID, userLang);
    await ask(bot, senderID, userLang);
    await bot.setUserPersistentMenu(senderID, menu);
  }
  if (payload === "setBur") {
    let userLang = "bur";
    let menu = [
      {
        locale: "default",
        callToActions: [
          {
            title: "",
            type: "postback",
            payload: "RE_STARTED",
          },
          {
            title: "",
            type: "postback",
            payload: "find",
          },
          {
            title: "",
            type: "postback",
            payload: "qa",
          },
          {
            title: "",
            type: "postback",
            payload: "agentDetails",
          },
          {
            title: "",
            type: "postback",
            payload: "LANGUAGE",
          },
          {
            title: "Website",
            type: "web_url",
            url: "https://",
            webviewHeightRatio: "tall",
          },
        ],
      },
    ];
    await bot.db.set(`${senderID}`, { userLang });
    await greets(bot, senderID, userLang);
    await ask(bot, senderID, userLang);
    await bot.setUserPersistentMenu(senderID, menu);
  }
  if (payload === "qa") {
    let funName = "qa";
    checkUser(bot, senderID, funName);
  }
  if (payload === "agentDetails") {
    if (d > 0 && t >= open && t <= closed) {
      let funName = "agentDetails";
      checkUser(bot, senderID, funName);
    } else {
      let funName = "agentDetailsOff";
      checkUser(bot, senderID, funName);
    }
  }
  if (payload === "agentContact") {
    if (d > 0 && t >= open && t <= closed) {
      let funName = "agentContact";
      checkUser(bot, senderID, funName);
    } else {
      let funName = "agentDetailsOff";
      checkUser(bot, senderID, funName);
    }
  }
  if (payload === "agentContactSave") {
    let funName = "agentContactSave";
    checkUser(bot, senderID, funName);
  }
  if (payload === "find") {
    let funName = "findASK";
    checkUser(bot, senderID, funName);
  }
  if (payload === "BackToBot") {
    let funName = "BTB";
    checkUser(bot, senderID, funName);
  }
  if (payload.startsWith("answer_")) {
    let funName = "ans";
    checkUser(bot, senderID, funName, payload);
  }
};
