/*CMD
  command: key2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Public Key :-
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("public",message,"integer")
Bot.sendMessage("Public Key Set Done🥳\n "+message+"")
