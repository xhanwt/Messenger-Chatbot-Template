module.exports = async function notRecognised(bot, senderID, userLang) {
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
      text: bot.lang.received[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
