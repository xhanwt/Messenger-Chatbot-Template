module.exports = async function agentDetails(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  await bot.db.push("handover.waitinglist", senderID);
  /* try{
   let labels = await bot.getAssociatedLabels(senderID);
   if(!labels.data.includes(324360746422174)) {
    bot.associateLabel(senderID, 324360746422174);//324360746422174 OUT OF OFFICE LABEL
    }
    }catch(e){}*/
  await bot.sendMessage(
    senderID,
    {
      text: bot.lang.agentContactSaved[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
  await bot.db.push("waitingSummary.users", senderID);
};
