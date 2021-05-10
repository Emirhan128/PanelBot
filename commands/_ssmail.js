/*CMD
  command: /ssmail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Message
  keyboard: 
  aliases: 
CMD*/

 {
  //your telegram id this is at the end of your referral link)
  let msg = "📮 Admin message\n\n" + message
  Bot.sendMessageToAllPrivateChats(msg)
  Bot.sendMessage("✅Message sent to all active members")
} 
