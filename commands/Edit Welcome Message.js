/*CMD
  command: Edit Welcome Message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Welcome Message
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("welcome",message,"string")
Bot.sendMessage("Welcome Message Edit Done click /start to check \n\n "+message+"")
