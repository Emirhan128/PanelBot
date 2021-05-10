/*CMD
  command: /masato
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🛠Enter User id?
  keyboard: 
  aliases: 
CMD*/

is_reply: true
let msg = message
User.setProperty("id", msg, "integer")
Bot.sendMessage(" Now Type Your Massage For User ")
Bot.runCommand("/send")
