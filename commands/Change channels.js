/*CMD
  command: Change channels
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

{
  var buttons = [
    [
      { title: "Channel 1", command: "ch1" },
      { title: "Channel 2", command: "ch2" }
    ],
    [
      { title: "Channel 3", command: "ch3" },
      { title: "Channel 4 ", command: "ch4" }
    ]
  ]
  Bot.sendInlineKeyboard(buttons, "👮‍♂*Note To Add Unlimited Number of channel please contact bot maker*")
} 
