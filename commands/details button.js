/*CMD
  command: details button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me ur details button
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("details",message)
Bot.sendMessage(" Your Details Message Is set: "+message)
