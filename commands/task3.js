/*CMD
  command: task3
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
var button = [[{ title: "🎧Joined🎧", command: "task3join" }],[{ title: "🔙Back To Tasks", command: "Completetask" }]]
Bot.sendInlineKeyboard(
  button,
  "*🚫Join Below Channel, To Claim Your Reward💰!!!\n\n🤑@PAYTM_PIRATES\n\n♦️Click Joined Button To Get Reward♦️*"
)
