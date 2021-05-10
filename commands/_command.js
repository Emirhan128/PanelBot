/*CMD
  command: /command
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🛠Enter User id?
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
Bot.runCommand("/reply")
