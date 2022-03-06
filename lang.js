module.exports = {
  personaID: "123456789xxxxxx", //bot's persona id //to get id comment out console log in index.js line 69
  //menu button icons
  findi: "https://i.imgur.com/pdtdDyG.png",
  vai: "https://i.imgur.com/pdtdDyG.png",
  agenti: "https://i.imgur.com/pdtdDyG.png",
  langi: "https://i.imgur.com/pdtdDyG.png",

  //##GREETS
  //eng = english / bur = burmese // check /scripts/lang.js toadd or remove languages, also check processes/postback.js lines 32 to 119
  greets1: {
    eng: "Greets ",
    bur: "မင်္ဂလာပါ ",
  },
  // between these twos is the user's profile name //you need verified meta bussiness and request permissions
  greets2: {
    eng: "! Welcome to []. 🤗 I'm a chat bot.",
    bur: "! [] မှကြိုဆိုပါတယ်။ 🤗 ကျွန်မကတော့ ကူညီဆောင်ရွက်ပေးမည့် chatbot ဖြစ်ပါတယ်။",
  },
  //##main menu
  ask: {
    eng: "What may I help you with?",
    bur: "",
  },
  //main menu button 1
  virtualAssist: {
    eng: "Automated Questions",
    bur: "",
  },
  //main menu button 2
  liveAgent: {
    eng: "Live Agent",
    bur: "",
  },
  //main menu button 3
  langSet: {
    eng: "Language",
    bur: "ဘာသာစကား",
  },
  //##back button
  back: {
    eng: "Back",
    bur: "",
  },
  //##menu button
  menu: {
    eng: "Menu",
    bur: "ပင်မစာမျက်နှာ",
  },
  //##Live Agent Things

  //#for those who contacted during office hours
  //confirmation?
  agentDetails: {
    eng: "If you’d like to be transferred to a live agent now, please select ‘Transfer Me’ below. Live chat is available from 10AM-7PM GMT, Monday to Saturday.",
    bur: "",
  },
  //confirm button
  agentContactShort: {
    eng: "Transfer Me",
    bur: "",
  },
  //transferred
  agentContacted: {
    eng: "Ok, I'm transferring you to a live agent now. A real person will be with you soon. Feel free to add any additional details now.",
    bur: "",
  },

  //#for those who contacted out of office hours
  //confirmation if the want to be queued in waiting list to handover in office hours
  agentDetailsOff: {
    eng: "Live chat is available from 10AM-7PM GMT, Monday to Saturday. Holidays may impact these hours. If you’d like a chat agent to reach out to you during our office hours, please select ‘Contact Me’ below.",
    bur: "",
  },
  //confirm button
  agentContactOffShort: {
    eng: "Contact Me",
    bur: "",
  },
  //added to queue list and ask if they want to provide summary(no timeout for asking)
  agentContactSaved: {
    eng: "Thank you, an agent will get back to you within the next office day. Please provide a summary of your question below.",
    bur: "",
  },
  //if they texted sth
  received: {
    eng: "Thanks for reaching us out. Your message has been received. Also, feel free to explore some more common questions below before the agent contact you.",
    bur: "",
  },
  //handovered to agent IN OFFICE HOURS for those who queued out of office hours
  agentHi:
    "Hi there, thanks for writing in. I'm a live chat agent.\n\n(+the other lang)", // need to add this because sometimes handover doesn't appear in page inbox

  //##API THINGS //REMOVE IF YOU DONT NEED //CHECK IN processes/text.js and scripts/findAsk.js
  findThings: {
    eng: "Search",
    bur: "",
  },
  //asking and wait for response(will timeour in 3 mins)
  findAsk: {
    eng: "Please describe the thing you wanna find. (in English)",
    bur: "",
  },
  //timeout message
  timeOut: {
    eng: "The action has been canceled as I didn’t receive any response within 3 minutes. ",
    bur: "",
  },
  nthFound: {
    eng: "Nothing found related to that topic. Explore more on our website: ",
    bur: "",
  },

  findMoreThings: {
    eng: "Search More",
    bur: "ထပ်ရှာမယ်",
  },

  moreOnWeb: {
    eng: "Explore more thingss on our website: ",
    bur: "",
  },

  //##If the user text things that won't trigger the bot
  notRecognised: {
    eng: "I'm sorry. I don't understand that request. Please feel free to explore some more common questions below. You can also type 'agent' anytime to connect with a real person.",
    bur: "တောင်းပန်ပါတယ်။ တောင်းဆိုချက်ကို နားမလည်ပါ။ အောက်ပါတို့ကို လေ့လာနိုင်ပါတယ်။ ကိုယ်စားလှယ်နှင့် ဆက်သွယ်လိုပါက ‘ကိုယ်စားလှယ်’ ဟုအချိန်မရွေး ရေးနိုင်ပါတယ်။",
  },

  //##HANDOVERED TO THE BOT (BACK TO BOT)

  // (this btb1 feature is not added but easy to do it by using set timeout and mongo db or array) edit in scripts/btb.js and check user response in processes/text.js
  //  btb1: {
  //   eng: "I'll go ahead and close this chat, but you will still have 5 minutes from now to ask me more questions. After 5 minutes, you'll be sent back to the automated support experience and can type 'agent' to reach back out to a human. Live chat is available from 10AM-7PM GMT, Monday to Satureday",
  //   bur: ""
  //  },

  //CUSTOMER FEEDBACK TEMPLATE (buttons should better write in english or there will be character limits)
  btb2: {
    eng: "Thanks for chatting with us today.",
    bur: "Thanks for chatting with us today.",
  },
  btb3: {
    eng: "We'd love your feedback to help us improve our service.",
    bur: "We'd love your feedback to help us improve our service.",
  },
  btb4: {
    eng: "Rate Your Experience",
    bur: "Rate Your Experience",
  },
  btb5: {
    eng: "What, if anything, can we improve?",
    bur: "What, if anything, can we improve?",
  },
  //and btb message
  btb6: {
    eng: 'Now, welcome back to our automated support experience! Please feel free to explore some more common questions below. You can also type "agent" anytime to connect with a human.',
    bur: "",
  },

  //
  //automated responses section
  qaMain: {
    eng: "Choose questions from below.",
    bur: "",
  },
  //automated Q and A  //if u wanna add or remove questions check scripts/ques.js
  q1: {
    eng: "question 1",
    bur: "",
  },
  a1: {
    eng: "answer for question 1",
    bur: "",
  },
  q2: {
    eng: "",
    bur: "",
  },
  a2: {
    eng: "",
    bur: "",
  },
  q3: {
    eng: "",
    bur: "",
  },
  a3: {
    eng: "",
    bur: "",
  },
  q4: {
    eng: "",
    bur: "",
  },
  a4: {
    eng: "",
    bur: "",
  },
  q5: {
    eng: "",
    bur: "",
  },
  a5: {
    eng: "",
    bur: "",
  },
  q6: {
    eng: "",
    bur: "",
  },
  a6: {
    eng: "",
    bur: "",
  },
  q7: {
    eng: "",
    bur: "",
  },
  a7: {
    eng: "",
    bur: "",
  },

  /* q8: {
      eng: "Other questions",
      bur: ""
    },
    a8: {
      eng: "Chat agents are available to help you on Mon-Sat from 10AM-7PM GMT. Holidays may impact these hours. Please type \"agent\" to reach out to a chat agent for further inquiries during our office hours.",
      bur: ""
    },*/
};
