/*CMD
  command: 📤Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("TRXwallet")
var m = Bot.getProperty("m")
if( wallet == undefined ){
var button = [{ title: "⚙️Set Wallet", command: "setwallet" }]
Bot.sendInlineKeyboard(
  button,
  "*❌Your wallet is not set👇*"
)}else{
if (balance.value() < m){
Bot.sendMessage("_❌ You have to own at least "+m+" atron!_\n\n💰 Balance : "+balance.value().toFixed(0)+" atron ")
}else{
Bot.sendMessage("*📤 Enter Amount Of Poke Tron*")
Bot.runCommand("reqs")
}
}}
