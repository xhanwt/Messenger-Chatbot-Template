module.exports = async function ask(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      text: bot.lang.findAsk[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
  await bot.db.push("waitingList.users", senderID, 240000);
  setTimeout(async () => {
    let list = await bot.db.get("waitingList.users");
    if (list && list.includes(senderID)) {
      await bot.db.pull("waitingList.users", senderID);
      await bot.typingOn(senderID);
      await bot.sendMessage(
        senderID,
        {
          quickReplies: [
            {
              content_type: "text",
              payload: "find",
              title: bot.lang.findThings[userLang],
              image_url: bot.lang.thingi,
            },
            {
              content_type: "text",
              payload: "qa",
              title: bot.lang.virtualAssist[userLang],
              image_url: bot.lang.vai,
            },
            {
              content_type: "text",
              payload: "agentDetails",
              title: bot.lang.liveAgent[userLang],
              image_url: bot.lang.agenti,
            },
            {
              content_type: "text",
              payload: "LANGUAGE",
              title: bot.lang.langSet[userLang],
              image_url: bot.lang.langi,
            },
          ],
          text: bot.lang.timeOut[userLang],
        },
        { messagingType: "RESPONSE", personaId: bot.lang.personaID }
      );
    } else {
    }
  }, 180000);
};
