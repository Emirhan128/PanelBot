/*CMD
  command: checktask2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var task2check = User.getProperty("task2check");
var user = options.result.status;
User.setProperty("status" , user, "string");
if (task2check == undefined){
if (user=="member" | user =="administrator" | user=="creator"){
let balance = Libs.ResourcesLib.userRes("money")
balance.add(0.25)
User.setProperty("task2check", Date.now(), "integer")
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
