/*CMD
  command: ch1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Channel link with @ 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("ch 1",message)
Bot.sendMessage(" Your Channel Message Is set: "+message)
