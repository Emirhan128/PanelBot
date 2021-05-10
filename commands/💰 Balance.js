/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = Bot.getProperty("m")
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var button = [{ title: "📤 Withdraw Money", command: "📤Withdraw" }]
Bot.sendInlineKeyboard(
  button,
"*👨🏻‍💻 User : "+user.first_name+"\n\n⭕Username :- @"+user.username+"\n\n💰 Balance : "+balance.value().toFixed(0)+" atron  \n\n🌀Minimum Withdraw:-"+m+" atron*")
if (user=="left"){
Bot.runCommand("/start")
}
