module.exports = async function agentDetails(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  try {
    await bot.passThreadControlToPageInbox(senderID, "Passed to page inbox.");
  } catch (e) {}
  await bot.deleteUserPersistentMenu(senderID);

  await bot.sendMessage(
    senderID,
    {
      text: bot.lang.agentContacted[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
