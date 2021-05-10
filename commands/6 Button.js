/*CMD
  command: 6 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Button Name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("typeee",message,"string")
Bot.sendMessage(" Your Button Is set Check From /start: "+message)
