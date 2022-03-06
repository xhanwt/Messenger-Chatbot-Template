module.exports = async function ans(bot, senderID, userLang, m) {
  let array = await m.split("_");
  var ans = bot.lang[array[1]];
  if (!ans) return;
  await bot.typingOn(senderID);
  // PRIVILEGED QUESTIONS (e.g, TEMPLATES)
  if (array[1] === "a5") {
    await bot.typingOn(senderID);
    await bot.sendGenericTemplate(
      senderID,
      [
        {
          imageUrl: "",
          title: "",
          defaultAction: {
            type: "web_url",
            url: "https://facebook.com/",
            webviewHeightRatio: "compact",
          },
        },
        {
          imageUrl: "",
          title: "",
          defaultAction: {
            type: "web_url",
            url: "https://facebook.com/",
            webviewHeightRatio: "compact",
          },
        },
      ],
      {
        imageAspectRatio: "square",
        messagingType: "RESPONSE",
        personaId: bot.lang.personaID,
      }
    );
  }

  // PRIVILEGED// PRIVILEGED// PRIVILEGED// PRIVILEGED// PRIVILEGED
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      quickReplies: [
        {
          content_type: "text",
          payload: "qa",
          title: bot.lang.back[userLang],
        },
        {
          content_type: "text",
          payload: "RE_STARTED",
          title: bot.lang.menu[userLang],
        },
      ],
      text: ans[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
