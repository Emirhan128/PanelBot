/*CMD
  command: checktask3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var task3check = User.getProperty("task3check");
var user = options.result.status;
User.setProperty("status" , user, "string");
if (task3check == undefined){
if (user=="member" | user =="administrator" | user=="creator"){
let balance = Libs.ResourcesLib.userRes("money")
balance.add(0.25)
User.setProperty("task3check", Date.now(), "integer")
Bot.sendMessage(
  "*🎁 Congrats , you Received 0.25 Rs*"
)
let task = User.getProperty("task")
if (task == undefined){
User.setProperty("task", 1, "integer")
}else if (task < 4){
User.setProperty("task", task+1, "integer")
}
User.addToGroup("user")
Bot.runCommand("💲 Earn More")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join channel*")
}}else{
Bot.sendMessage("♦️Task Already Done😅!!")
}
