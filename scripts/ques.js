module.exports = async function qa(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      quickReplies: [
        {
          content_type: "text",
          title: bot.lang.q1[userLang],
          payload: "answer_a1",
        },
        {
          content_type: "text",
          title: bot.lang.q2[userLang],
          payload: "answer_a2",
        },
        {
          content_type: "text",
          title: bot.lang.q3[userLang],
          payload: "answer_a3",
        },
        {
          content_type: "text",
          title: bot.lang.q4[userLang],
          payload: "answer_a4",
        },
        {
          content_type: "text",
          title: bot.lang.q5[userLang],
          payload: "answer_a5",
        },
        {
          content_type: "text",
          title: bot.lang.q6[userLang],
          payload: "answer_a6",
        },
        {
          content_type: "text",
          title: bot.lang.q7[userLang],
          payload: "answer_a7",
        },
        /*{
      "content_type":"text",
      "title": bot.lang.q8[userLang],
      "payload":"answer_a8",
    },*/ {
          content_type: "text",
          title: bot.lang.back[userLang],
          payload: "RE_STARTED",
        },
      ],
      text: bot.lang.qaMain[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
