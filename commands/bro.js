/*CMD
  command: bro
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

{
  //your telegram id this is at the end of your referral link)
  var msg = " " + message + " "
  Bot.sendMessageToAllPrivateChats(msg)
  Bot.sendMessage("✅Message sent to all active members")
} 
