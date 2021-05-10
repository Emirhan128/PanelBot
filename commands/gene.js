/*CMD
  command: gene
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let res = Libs.ResourcesLib.userRes("referral")
let reflink = Libs.ReferralLib.currentUser.getRefLink(
  ""+bot.name+"",
  "Bot"
)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage(
  "*\n\n\n" +
    reflink +
    "*"
)
