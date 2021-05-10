/*CMD
  command: balance button
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "Withrawal Balance", command: "withdrawallll"}],
    [{title: "Active Investment", command: "investttt"}],
    [{title: "Total Profit", command: "profittt"}],
    [{title: "Total Affiliate Bonus", command: "bonusss"}],
    [{title: "Total Withdrawn", command: "withrawww"}],
];
Bot.sendInlineKeyboard(buttons, "*Welcome In Balance Change text Room*");
