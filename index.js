const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const { MessengerClient } = require("messaging-api-messenger");
const bot = new MessengerClient({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  appId: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  skipAppSecretProof: true,
});

const { Database } = require("quickmongo");
bot.db = new Database(process.env.mongoUri);
bot.db.on("ready", () => {
  console.log("Connected to the langauge database");
});
bot.db.connect();
bot.fbdb = new Database(process.env.mongoUriFb);
bot.fbdb.on("ready", () => {
  console.log("Connected to the feedback database");
});
bot.fbdb.connect();
bot.lang = require("./lang.js");
bot.config = require("./config.js");
// app configuration
app.set("port", process.env.PORT || 3000);
// setup our express application
app.use(morgan("dev")); // log every request to the console.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app routes
app.get("/", function (req, res) {
  // do something here.
  res.send("Peacock is online!");
});
require("./routes/webhook_verify")(app, bot);
// warming up the engines !! setta !! go !!!.
app.listen(app.get("port"), function () {
  const url = "http://localhost:" + app.set("port");
  console.log("Application running on port: ", app.get("port"));
});
// SETTLE THINGS
/*
  bot.setGetStarted('GET_STARTED');

  bot.setGreeting([
  {
    locale: 'default',
    text: '',
  },
]);
  bot.setNLPConfigs({ nlpEnabled: true });
  bot.setPersistentMenu([
  {
    locale: 'default',
    callToActions: [
    
      {
        title: 'website name',
        type: 'web_url',
        url: 'https://',
        webviewHeightRatio: 'tall',
      },
    ],
  },
]);
 /*
bot.createPersona({
  name: 'Bot Persona',
  profilePictureUrl: '',
}).then((id) => {console.log(id)})

bot.setIceBreakers([
  {
    question: 'Get Started',
    payload: 'GET_STARTED',
  }
]);

*/

//CHECK EVERY 2 MINS TO HANDOVER THE THE **FIRST ONE** IN THE QUEUE IF OFFICE HOURS
setInterval(async function () {
  const n = new Date();
  const d = n.getDay();
  const h = n.getHours();
  const m = n.getMinutes();
  const t = h * 60 + m;
  //office
  const open = bot.config.open;
  const closed = bot.config.closed;
  //

  if (d > 0 && t >= open && t <= closed) {
    const waitlist = await bot.db.get("handover.waitinglist");
    if (waitlist.length === 0) return;
    var s = waitlist[0];
    try {
      await bot.passThreadControlToPageInbox(
        s,
        "Waiting person passed to page inbox."
      );
      await bot.deleteUserPersistentMenu(s);
      await bot.sendMessage(
        s,
        {
          text: bot.lang.agentHi,
        },
        { messagingType: "RESPONSE" }
      );
      await bot.db.pull("handover.waitinglist", s);
      await bot.db.pull("waitingSummary.users", s);
    } catch (e) {
      console.log(e);
      await bot.db.pull("handover.waitinglist", s);
      await bot.db.pull("waitingSummary.users", s);
    }
  }
}, 120000); //600000 //10 mins)
