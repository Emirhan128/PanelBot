/*CMD
  command: reqs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pc = Bot.getProperty("ch5")
var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
var mx = Bot.getProperty("mx")
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("TRXwallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    Bot.offCommand("Send Withdraw")
  } else {
  }
  if (message < mx) {
    Bot.sendMessage("_🚫 Minimum Withdraw "+mx+"atron_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " ₹_"
      )
    } else {
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "\n" +
      "✅ Withdraw Amount : " +
      amount +
      "₹" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
     "@"+bot.name+"" +
      "\n💲 Withdraw Amount : " +
      amount +
      "₹" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }let task = User.getProperty("task")
      Bot.sendMessage(
        "*Withdrawal initiated successful!!!\n\n😁Payment Channel - "+pc+"*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: ""+pc+"",
        text:
          "*📤New Withdraw Requested 📤\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " Poke Tron\n▪️ User Referrals = " +
          refList.length +
          "\n\n📲Payment* = `"  +
          wallet +  
          " ` \n\n*👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}
Bot.runCommand("Cr")
