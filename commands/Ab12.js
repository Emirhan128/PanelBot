/*CMD
  command: Ab12
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


function doAttracted(channel) {
  hello("Referal: " + channel)
}
let u = Libs.ReferralLib.currentUser.attractedByUser();
let chanell = Libs.ReferralLib.currentUser.attractedByChannel();
let msg = "🌹NEW USER ALERT🌹\n\n🎁Name: *"+user.first_name+"*\n\n🇮🇳ID: "👤 "@"+user.username+"\n\n👨🏻‍💻Referred By =  "

if(u){
  msg = msg + "@" + u.username
}else if (chanell){
  msg = msg + "chanell: " + chanell
}else{
  msg = "*🌹NEW USER ALERT🌹\n\n🎁Name: *"+user.first_name+"*\n\n🇮🇳ID: ""@"+user.username+""
}

Bot.sendMessageToChatWithId(1135301576,msg)
