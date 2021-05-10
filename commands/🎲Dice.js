/*CMD
  command: 🎲Dice
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💲Bet Amount💲
  keyboard: 
  aliases: 
CMD*/

let times = User.getProperty("times")
if (times < 3 | times == undefined){
var balance = Libs.ResourcesLib.userRes("money")
if (Number.isInteger(parseInt(message))){
if(parseInt(message) < 0.20){
Bot.sendMessage("Minimum Bet is ₹0.20")
}else if(parseInt(message) > balance.value()){
Bot.sendMessage("❌ insufficent balance you have"+balance.value().toFixed(6)+" Paytm Cash")
}else{
Bot.sendMessage("Ok, Bet is set at "+parseInt(message))
User.setProperty("bet",parseInt(message),"integer")
Bot.runCommand("betplay")
}}else{
Bot.sendMessage("Number value only!")
}}else{
Bot.sendMessage("You've played the game 3 times in a day, Come back tomorrow!!")
}
