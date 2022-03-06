module.exports = {
  discordWebhook: process.env.discordWebhook,
  //office hours in UTC
  // hour * 60 + minutes
  open: 3 * 60 + 30, //3:30 UTC
  closed: 16 * 60 + 45, //16:45 UTC

  policy: "https://", //your website or app policy url to add in feedback template
};
