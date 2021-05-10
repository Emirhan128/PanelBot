/*CMD
  command: betplay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🏀Choose Head Or Tail🏀

✍️Type 1 for Head 🏀

✍️Type 2 for Tails🏀
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var Bet = User.getProperty("bet")
let balance = Libs.ResourcesLib.userRes("money")

let win = Libs.Random.randomInt(1,2);
if (win == 1){
if (message == "1"){
Bot.sendMessage("It's a Head!!")
Bot.sendMessage("You won!!")
balance.add(+Bet)
Bot.sendMessage("Congrats you just received "+Bet+" Cash")
}else{
Bot.sendMessage("It's a Head!!")
Bot.sendMessage("You lose!")
balance.add(-Bet)
Bot.sendMessage("😢Ah shit, you just lost "+Bet+" Cash")
}
}else{
if (message == "2"){
Bot.sendMessage("It's a Tails!!")
Bot.sendMessage("You won!!")
balance.add(Bet)
Bot.sendMessage("Congrats you just received "+Bet+" Cash")
}else{
Bot.sendMessage("It's a Tails!!")
Bot.sendMessage("You lose!")
balance.add(-Bet)
Bot.sendMessage("Ah shit, you just lost "+Bet+" Cash")
}
}
Bot.runCommand("main_menu")

let times = User.getProperty("times")
if (times == undefined){
User.setProperty("times", 1, "integer")
}else if (times < 10){
User.setProperty("times", times+1, "integer")
}
