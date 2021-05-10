/*CMD
  command: refcheck
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
var lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "*Total users: " + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + " @" + user.username + "*";
  }
}else{
  msg = "*NO REFER YET!!*";
}
Bot.sendMessage(msg);
