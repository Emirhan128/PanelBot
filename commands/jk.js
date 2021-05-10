/*CMD
  command: jk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [[{ title: "📲 Subscribe", url: "https://youtu.be/kwQHNMcdwmw" }],[{ title: "✅ check", command: "jk2" }]]
Bot.sendInlineKeyboard(
  button,
  "*🚫Not Subscribed Youtube Channel🚧\n\n❌Must Subscribe Channel To Access Our Bot... *"
)
