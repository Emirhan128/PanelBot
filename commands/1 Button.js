/*CMD
  command: 1 Button
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Button Name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("balanee",message,"string")
Bot.sendMessage(" Your Button Is set Check From /start: "+message)
