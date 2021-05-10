/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cha = Bot.getProperty("ch 1")
var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("done3")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*🚫Not Joined = "+cha+"*")
}
