/*CMD
  command: unban user
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
Bot.setProperty(""+data.message+"" , "unban" , "string");
Bot.sendMessage("User Has Been unBan");
}else{
Bot.sendMessage("Not the admin");
}
}
