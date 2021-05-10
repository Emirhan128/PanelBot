/*CMD
  command: payment channel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send New Payment Proof Channel
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("channel",message)
Bot.sendMessage(" Your Payment Channel Message Is set: "+message)
