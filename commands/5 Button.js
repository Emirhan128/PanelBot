/*CMD
  command: 5 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Button Name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("bayyy",message,"string")
Bot.sendMessage(" Your Button Is set Check From /start: "+message)
