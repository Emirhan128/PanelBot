/*CMD
  command: 🗣️Invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var m = Bot.getProperty("m")
var ref = Bot.getProperty("ref")
let res = Libs.ResourcesLib.userRes("referral")
let reflink = Libs.ReferralLib.currentUser.getRefLink(
  "Work_FromHomeBot",
  "Bot"
)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [[{ text : "🔍My Referal Link" , callback_data: "gene"}],[{text : "🎓Top Referal" , callback_data: "Top refer"},{text : "📑Detailed Report📑" , callback_data: "refcheck"}]];
var text = "*🏠Welcome To Invite And Earn\n\n🎙️Per Referral- "+ref+" atron\n\n👥 Total Invites : " +
    refList.length +
    " Users *"

Api.sendPhoto({
  photo: "https://images.app.goo.gl/mNGfnuJ4g7wtc2Vw9",
  caption:
    text,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: button
  }
})

