/*CMD
  command: Coinpayment
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "Public Key", command: "key2"}],
    [{title: "Private Key", command: "key"}],
    [{title: "BB Key", command: "key3"}],
];
Bot.sendInlineKeyboard(buttons, "*Welcome In Coinpyament Change Room*");
