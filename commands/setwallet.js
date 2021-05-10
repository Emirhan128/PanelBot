/*CMD
  command: setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *✏️Send your TRX address Or Poke Tron Address*
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
if (message.length < 10) {
  Bot.sendMessage("*🚫Wrong Address Found*")
  
} else {

let wallet = User.getProperty("TRXwallet")
User.setProperty("TRXwallet", data.message)
Bot.sendMessage("*✅ Trx Address set To :* " + data.message + "")
}

