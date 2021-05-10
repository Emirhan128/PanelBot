/*CMD
  command: ban user
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var  admin="1135301576"

if (data.message=="Back 🔙"){
Bot.runCommand("New panel")
}else{
if (user.telegramid==admin){
Bot.setProperty(""+data.message+"" , "ban" , "string");
Bot.sendMessage("User Has Been Ban");
}else{
Bot.sendMessage("Not the admin");
}
}
