/*CMD
  command: 🏠History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="*No Refer & Withdraw Found!!*";
Bot.sendMessage(go)
}else{
Bot.sendMessage("🕝 Your All Transaction\n\n"+his)
}
