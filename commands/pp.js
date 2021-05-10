/*CMD
  command: pp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = "[" +
 user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")"

  if(u){
  msg =  "*🆕 New User!*"+"\n\nUser:-"+"[" +
 user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")" + "\nReferred By :" + "[" +
 u.first_name +
    "](tg://user?id=" +
    u.telegramid +
    ")"
}else{
  msg = "*🆕 New User!*"+"\n\nUser:"+"[" +
 user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")" + "\nReferred By :" + " From Channel "
}
Bot.sendInlineKeyboardToChatWithId(your telegram id, button, msg);
User.setProperty ("new_user",true,"boolean")
}
Bot.run({
    command: "main_menu"
  })
}else
Bot.run({
    command: "main_menu"
  })
