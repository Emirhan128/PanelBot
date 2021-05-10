/*CMD
  command: /w
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send amount
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message);
let tgid = options.tgid
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(amount);
Bot.sendMessageToChatWithId(tgid,"Admin Send You A Gift of 💰 Amount:"+amount)
Bot.sendMessage("Sending Gift to "+tgid+" done") 
