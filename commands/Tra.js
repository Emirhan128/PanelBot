/*CMD
  command: Tra
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ref = Bot.getProperty("ref")
var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "-------------------------------------------------------------------------------------\n" +
      "✅ Withdraw Amount : " +
      ref +
      "₹" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "-------------------------------------------------------------@"+bot.name+"------------------------" +
      "\n✅ Withdraw Amount : " +
      amount +
      "₹" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
