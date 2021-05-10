/*CMD
  command: 7 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Button Name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("typpp",message,"string")
Bot.sendMessage(" Your Button Is set Check From /start: "+message)
