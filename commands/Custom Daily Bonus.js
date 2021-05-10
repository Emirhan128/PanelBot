/*CMD
  command: Custom Daily Bonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Daily Bonus Change Amount Send
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("bonus",message,"integer")
Bot.sendMessage("Bonus Change Is Done Please Check ")
