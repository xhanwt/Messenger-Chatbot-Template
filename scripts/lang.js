module.exports = async function lang(bot, senderID) {
  await bot.typingOn(senderID);
  await bot.sendMessage(
    senderID,
    {
      quickReplies: [
        {
          content_type: "text",
          title: "Eng",
          payload: "setEng",
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh6xxrHid-40Bg4gQMRmKioxmyjHA1wkGyg&usqp=CAU",
        },
        {
          content_type: "text",
          title: "မြန်မာ",
          payload: "setBur",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Myanmar_%28Lithuania_colors%29.svg/1280px-Flag_of_Myanmar_%28Lithuania_colors%29.svg.png",
        },
      ],
      text: "Please choose your preferred language.\n\nဘာသာစကားရွေးချယ်ပါ။",
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
};
