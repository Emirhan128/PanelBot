/*CMD
  command: ch3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Channel Link With @
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("ch 3",message)
Bot.sendMessage(" Your Channel Message Is set: "+message)
