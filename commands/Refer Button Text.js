/*CMD
  command: Refer Button Text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your Refer Button New Text
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("referrr",message,"string")
Bot.sendMessage("Your Refer Message Edit Done \n\n "+message+"")
