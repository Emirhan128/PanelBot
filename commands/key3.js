/*CMD
  command: key3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send bb key
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("bbkey",message,"integer")
Bot.sendMessage("bb key setup Done\n "+message+"")
