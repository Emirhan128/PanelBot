/*CMD
  command: Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data){
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
  chat_id: chat_id,
  message_id: message_id
})

}
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 12 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   var button = [{ title: "🔙Back To Menu", command: "mm" }]
Bot.sendInlineKeyboard(
  button,"*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("money")
balance.add(1)
var button = [{ title: "🔙Back To Menu", command: "mm" }]
Bot.sendInlineKeyboard(
  button,
  "*🎁 Congrats , you Received 1₹*")
