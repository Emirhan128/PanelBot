/*CMD
  command: /editpanel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⭕Enter Password 
  keyboard: 
  aliases: 
CMD*/

if ((message == "180")) {
  var buttons = [[
    {title: "📜Change Channels", command: "Change channels" }],
    [{title: "🌀 Change Refer", command: "CRB"},
     {title: "🎯Withdraw Settings ", command: "Seto" }],[{title: "💸Change Payment Channel", command: "PC"}],[{title: "🎁Bonus", command: "DB"},{title: "Ⓜ️ore....", command: "i"}],[{title: "💗Make Redeem Code", command: "mona"}]
]
   
  Bot.sendInlineKeyboard(buttons, "👮‍♂*Your In Edit Panel*")
} else {
  Bot.sendMessage("*Password Wrong🎯*")
}
