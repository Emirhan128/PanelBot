/*CMD
  command: minimum withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How limit you want to set
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("limitttt",message,"string")
Bot.sendMessage(" Your Limit Is Set : "+message)
