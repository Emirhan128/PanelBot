/*CMD
  command: rej
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user_link = Libs.commonLib.getLinkFor(user)
var ref = Bot.getProperty("ref")
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = ref
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(ref)
  var refcom = Libs.ResourcesLib.anotherUserRes("n", referrer.telegramid)
  refcom.add(ref)

  Bot.sendMessageToChatWithId(referrer.telegramid, "*√You Got "+ref+" atron For A New Referral\n\n👤 Referral Name = *"+user_link+"* \n\n✅Your Referral Reward Added In Your Account*")
} else {
  Bot.sendMessage()
}

