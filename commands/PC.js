/*CMD
  command: PC
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send New Payment Channel With @
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("ch5",message)
Bot.sendMessage(" Your Payment Channel Is set: "+message)
