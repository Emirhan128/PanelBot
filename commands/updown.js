/*CMD
  command: updown
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[
    {title: "1 Button", command: "1 Button"},
    {title: "2 Button", command: "2 Button"}],
    [{title: "3 Button", command: "3 Button"},
    {title: "4 Button", command: "4 Button"},
    {title: "5 Button", command: "5 Button"}],
    [{title: "6 Button", command: "6 Button"},
    {title: "7 Button", command: "7 Button"},
    {title: "8 Button", command: "8 Button"}],
    [{title: "9 Button", command: "9 Button"},
    {title: "10 Button", command: "10 Button"},
    {title: "11 Button", command: "11 Button"}],
];
Bot.sendInlineKeyboard(buttons, "*Welcome In Menu Up Down Button Room\n\nIf You Want To Change The Menu Button First Change Command Name Then Up down Button If You Use Direct Its Not Work Thanku*");
