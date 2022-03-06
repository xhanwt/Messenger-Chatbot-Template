module.exports = async function agentDetails(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      quickReplies: [
        {
          content_type: "text",
          title: bot.lang.agentContactShort[userLang],
          payload: "agentContact",
        },
        {
          content_type: "text",
          title: bot.lang.back[userLang],
          payload: "RE_STARTED",
        },
      ],
      text: bot.lang.agentDetails[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
