/*CMD
  command: mm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendKeyboard("💰 Balance,🗣️Invite,🏠History,\n📤Withdraw,⚙️Set wallet\n📉 Statistics,🤖Admin","\n*🏠WELCOME TO MAIN MENU*")
Bot.runCommand("rej")
