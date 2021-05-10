/*CMD
  command: DB
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send New Daily Bonus
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("DB",message,"integer")
Bot.sendMessage("⭕Daily Bonus Was Changed Successful")
