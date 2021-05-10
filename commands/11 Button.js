/*CMD
  command: 11 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Button Name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("templ33",message,"string")
Bot.sendMessage(" Your Button Is set Check From /start: "+message)
