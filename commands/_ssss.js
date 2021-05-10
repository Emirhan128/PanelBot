/*CMD
  command: /ssss
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Amount
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = user.telegramid
// telegramid - it is telegram id for another user
let res = Libs.ResourcesLib.anotherUserRes("money", tgid)
res.add(parseFloat(amount))
Bot.sendMessage(
  "*🆔 User Id :-* " +
    tgid +
    "\n\n*💰Amount :- *" +
    amount +
    "\n\n💰 Balance   :- " +
    res.value()
)
