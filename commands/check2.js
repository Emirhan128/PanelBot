/*CMD
  command: check2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chc = Bot.getProperty("ch 3")
var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("done4")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*🚫Not Joined= "+chc+"*")
}
