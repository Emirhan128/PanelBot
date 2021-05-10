/*CMD
  command: jk2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("_⚠️Not Subscribed_")
var button = [[{ title: "📲 Subscribe", url: "https://youtu.be/kwQHNMcdwmw" }],[{ title: "✅ check", command: "mm" }]]
Bot.sendInlineKeyboard(
  button,
  "*🚫Not Subscribed Youtube Channel🚧\n\n❌Must Subscribe Channel To Access Our Bot... *"
)
