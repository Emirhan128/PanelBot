/*CMD
  command: /ss
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "📜 Get Full Info Of Bot 📜", command: "Infobot" }],
    [{title: "🌀 Change Balance", command: "Change Balance"},
     {title: "💰 Check User Balance ", command: "💰 Check User Balance" }],
    [{title: "📣 Broadcast", command: "Broadcast 📣" },
    {title: "🎁 Gift Sending ", command: "Gift Sending" }],
    [{title: "💎 Gem Sending", command: "Gem Sending" },
    {title: "📊 Fake Statistis", command: "Fake Statistis" }],
    [{title: "⚙️ Coinpayment ", command: "Coinpayment" },
    {title: "📥 Demo Deposit", command: "demo Deposit" }],
    [{title: "📥 Demo Withdraw", command: "demo withdraw" }],
    [{title: "🔥 Custom Daily Bonus", command: "Custom Daily Bonus" },
     {title: "🧰 Customize Support Button", command: "Customize Support Button" }],
     [{title: "⚒️ Edit Welcome Message", command: "Edit Welcome Message" }],
     [{title: "🔒 Ban User ", command: "ban user" },
     {title: "🔓 Unban User", command: "unban user" }],
     [{title: "🔝 Top User", command: "Top user" }],
     [{title: "🎯 Payment Channel", command: " payment channel "},
      {title: "🏵 Balance Button Text ", command: "balance button" }],
     [{title: "🎗 Refer Button Text", command: "Refer Button Text" }],
     [{title: "📤 Minimum Withdraw Set", command: "minimum withdraw" },
     {title: "🔔 Referral Invite Notification Text", command: "Notification Text" }],
     [{title: "💬 Refer Bonus Text", command: "Refer bonus" }],
     [{title: "🎰 Earn More Text", command: "Earnmore" },
     {title: "🎞 Menu Button Up Down", command: "updown" }], 
     [{title: "📝 Edit Start button", command: "Startbutton" }],
      [{title: "💻 Details Button text", command: "details button" },
      {title: "🆔 Bot Name ", command: "botname" }],
       [{title: "🛑 Transfer Admin Panel", command: "Transfer Admin Panel" }], 
];

Bot.sendInlineKeyboard(buttons, "*Hey* " +user.first_name+ " \n*Welcome To the admin panel*" + "\n*Warning when using this panel please don't send any other command it may spoil your work*\n\n🌐 _Coded");
