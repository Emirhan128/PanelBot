/*CMD
  command: Gift Sending
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User Telegram Id
  keyboard: 
  aliases: gem sending
CMD*/

let msg = message;
Bot.run({
command:"/w",
options:{tgid:msg}
})
