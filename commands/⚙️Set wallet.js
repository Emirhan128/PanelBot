/*CMD
  command: ⚙️Set wallet
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
let wallet = User.getProperty("TRXwallet")
  var button = [[{ title: "📤Set Or Change Wallet", command: "setwallet" }]]
Bot.sendInlineKeyboard(
  button,
  "*Account Settings ⚙\n\n👨🏻‍💻 User : "+user.first_name+"\n🆔 User ID : "+user.telegramid+"\n💼 Wallet :* "+wallet+"\n\n*If You're Wallet Is Undefined Set It By Clicking The Button Below*"
)
