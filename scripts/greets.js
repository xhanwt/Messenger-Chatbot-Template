module.exports = async function greets(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  const profile = await bot.getUserProfile(senderID);
  await bot.sendMessage(
    senderID,
    {
      text:
        bot.lang.greets1[userLang] +
        profile.firstName +
        bot.lang.greets2[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
