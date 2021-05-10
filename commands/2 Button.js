/*CMD
  command: 2 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send button name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("balaneey",message,"string")
Bot.sendMessage("Your Button Is set Check From /start: "+message)
