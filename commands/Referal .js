/*CMD
  command: Referal 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = Bot.getProperty("m")
var ref = Bot.getProperty("ref")
let res = Libs.ResourcesLib.userRes("referral")
let reflink = Libs.ReferralLib.currentUser.getRefLink(
  "",
  "Bot"
)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [[{ text : "🔍My Referal Link" , callback_data: "mm"}],[{text : "🔍My Referal Link" , callback_data: "mm"},{text : "🔍My Referal Link" , callback_data: "mm"}]];
var text = "*🏠Welcome To Invite And Earn\n\n🎙️Per Referral- "+ref+" \n\n🎙️Minimum Withdraw -₹ "+m+"\n\n\n\n👥 Total Invites : " +
    refList.length +
    " Users *"

Api.sendPhoto({
  photo: "https://images.app.goo.gl/Ui3SQ9KgLx4PTkW7A",
  caption:
    text,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: button
  }
})

