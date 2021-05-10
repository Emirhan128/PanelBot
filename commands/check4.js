/*CMD
  command: check4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chd = Bot.getProperty("ch 4")
var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("done5")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*🚫Not Joined = " + chd + "*")
}

