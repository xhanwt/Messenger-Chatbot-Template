module.exports = async function btb(bot, senderID, userLang) {
  await bot.typingOn(senderID);
  /* await bot.sendMessage(senderID, {
      text: bot.lang.btb1 [userLang],
      }, { messagingType: 'RESPONSE', personaId: bot.lang.personaID });
    }
  */
  //setTimeout(btbSet, 5000);
  // async function btbSet() {
  await bot.typingOn(senderID);
  if (userLang === "eng") {
    let menu = [
      {
        locale: "default",
        callToActions: [
          {
            title: "Main Menu",
            type: "postback",
            payload: "RE_STARTED",
          },
          {
            title: "Find Things",
            type: "postback",
            payload: "find",
          },
          {
            title: "Q&A",
            type: "postback",
            payload: "qa",
          },
          {
            title: "Live Agent",
            type: "postback",
            payload: "agentDetails",
          },
          {
            title: "Language",
            type: "postback",
            payload: "LANGUAGE",
          },
          {
            title: "Website",
            type: "web_url",
            url: "https://",
            webviewHeightRatio: "tall",
          },
        ],
      },
    ];

    await bot.setUserPersistentMenu(senderID, menu);
  } else if (userLang === "bur") {
    let menu = [
      {
        locale: "default",
        callToActions: [
          {
            title: "ပင်မစာမျက်နှာ",
            type: "postback",
            payload: "RE_STARTED",
          },
          {
            title: "ရှာမယ်",
            type: "postback",
            payload: "find",
          },
          {
            title: "သိလိုသည်များ",
            type: "postback",
            payload: "qa",
          },
          {
            title: "ကိုယ်စားလှယ်နဲ့ပြောမယ်",
            type: "postback",
            payload: "agentDetails",
          },
          {
            title: "ဘာသာစကား",
            type: "postback",
            payload: "LANGUAGE",
          },
          {
            title: "Website",
            type: "web_url",
            url: "https://",
            webviewHeightRatio: "tall",
          },
        ],
      },
    ];
    await bot.setUserPersistentMenu(senderID, menu);
  }

  //await bot.sendMessage(senderID, {
  //  text: bot.lang.btb1[userLang],
  //  }, { messagingType: 'RESPONSE', personaId: bot.lang.personaID });
  await bot.sendTemplate(
    senderID,
    {
      template_type: "customer_feedback",
      title: bot.lang.btb2[userLang], // Business needs to define.
      subtitle: bot.lang.btb3[userLang], // Business needs to define.
      button_title: bot.lang.btb4[userLang], // Business needs to define.
      feedback_screens: [
        {
          questions: [
            {
              id: "exp", // Unique id for question that business sets
              type: "csat",
              title: "How was your experinece with the human agent?", // Optional. If business does not define, we show standard text. Standard text based on question type ("csat", "nps", "ces" >>> "text")
              score_label: "poor_great", // Optional
              score_option: "five_emojis",
              // Optional. Inherits the title and id from the previous question on the same page.  Only free-from input is allowed. No other title will show.
              follow_up: {
                type: "free_form",
                placeholder: bot.lang.btb5[userLang], // Optional
              },
            },
          ],
        },
      ],

      business_privacy: {
        url: bot.config.policy, // POLICY TO ADD
      },
      expires_in_days: 3, // Optional, default 1 day, business defines 1-7 days
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );

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
      text: bot.lang.btb6[userLang],
    },
    { messagingType: "RESPONSE", personaId: bot.lang.personaID }
  );
  // }
};
