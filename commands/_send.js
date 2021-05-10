/*CMD
  command: /send
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let tgid = User.getProperty("id")
let msag = message
let msg = "💬Admin Massage  #msg\n➖➖➖➖➖➖➖➖➖➖➖\n\n" + msag
Bot.sendMessageToChatWithId(tgid, msg)
Bot.sendMessage("✅Message sent to User")
