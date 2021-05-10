/*CMD
  command: 💰 Check User Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter User Id?
  keyboard: 
  aliases: 
CMD*/

if (data.message=="Cancel 🚫"){
Bot.runCommand("User's Settings 🔧");
}else{
let id = data.message; 
let user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("Users Balance : "+user_bal.value().toFixed(8));
}
