/*CMD
  command: Fake Statistis
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "Total Investor Change 🧰", command: "totalinvest"}],
    [{title: "Total Investment Change 🧰", command: "totalinvest2"}],
   [{title: "Total Reinvestment Change 🧰", command: "totalinvest3" }],
   [{title: "Total Withdraw Change 🧰", command: "totalinvest4" }],
];

Bot.sendInlineKeyboard(buttons, "*Welcome In Fake Statistics Change Room*");

