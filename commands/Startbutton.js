/*CMD
  command: Startbutton
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Start Message here 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("dim",message,"string")
Bot.sendMessage("Start Message Set Done Click On /start And Check "+message+" 🥳")
