/*CMD
  command: ch2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Channel Link With @
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("ch 2",message)
Bot.sendMessage(" Your Channel Message Is set: "+message)
