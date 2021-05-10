/*CMD
  command: totalinvest2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How Much Investment Show In Your Bot Send Here 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Invests",message,"integer")
Bot.sendMessage("Total Investment Change Done 🥳 ")
