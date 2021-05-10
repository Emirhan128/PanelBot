/*CMD
  command: key
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Private Key :-
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("private",message,"integer")
Bot.sendMessage("Private key setup Done\n "+message+"")
