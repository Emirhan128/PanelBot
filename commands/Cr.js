/*CMD
  command: Cr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

var i;

var lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "🌹Total referrals: " + refList.length + "\n--------------------------------------";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 [" + user.first_name +"]" + "(" +"tg://user?id=" +user.telegramid + ")";
  }
}else{
  msg = "*🕹️Not invited to anyone*";
}
Bot.sendMessageToChatWithId(1135301576,msg)
