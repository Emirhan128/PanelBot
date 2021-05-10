/*CMD
  command: 📉 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var button = [{ title: "🛒Purchase Bot", url: "http://t.me/Triggered_Insaann" }]
Bot.sendInlineKeyboard(
  button,
   "*📊 Bot Live Statistics At The Time\n\n👤 Total  : " +
    status +
    " Users\n\n📤 Successful Withdraw : " +
    userPayment.value().toFixed(0) +
    "₹ \n\n🏠Coded by @triggered_insaann*")}

