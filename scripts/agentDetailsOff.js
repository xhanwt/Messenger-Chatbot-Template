module.exports = async function agentDetailsOff(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      quickReplies: [
        {
          content_type: "text",
          title: bot.lang.agentContactOffShort[userLang],
          payload: "agentContactSave",
        },
        {
          content_type: "text",
          title: bot.lang.back[userLang],
          payload: "RE_STARTED",
        },
      ],
      text: bot.lang.agentDetailsOff[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
