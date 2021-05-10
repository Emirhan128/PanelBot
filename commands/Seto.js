/*CMD
  command: Seto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "⭕Minimum Withdraw", command: "CWB" }],
    [{title: "🌀 Maximum Withdraw", command: "CWE"}]]
Bot.sendInlineKeyboard(buttons, "*Withdraw Editor");
