/*CMD
  command: totalinvest3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How Much Reinvestment Show In Your Bot Send Here 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("reInvest",message,"integer")
Bot.sendMessage("Reinvest Change Done 🥳 ")
