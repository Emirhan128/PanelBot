/*CMD
  command: Top refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data){
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
  chat_id: chat_id,
  message_id: message_id
})

}
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "sending"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "sending"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "sending"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "sending"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: ""
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: ""
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: ""
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: ""
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: ""
})
  var msg = "*Top 10 referral:*\n"
  var users = Libs.ReferralLib.topList.get(10)

  for (var index in users) {
    var u = users[index]
    msg += "*@" + u.username+" "+ u.count +"\n*"
  }

  Bot.sendMessage(msg)
