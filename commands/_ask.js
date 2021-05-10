/*CMD
  command: /ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Your I'D ?
  keyboard: 
  aliases: 
CMD*/

let msg = message
User.setProperty("id", msg, "integer")
Bot.sendMessage(" Now Type Your Questions ❗️")
Bot.runCommand("/akeok")
