/*
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Me',
  description: 'Discord talkshit bot',
  script: 'C:\\Users\\AwwMarco\\Documents\\DiscordBot\\Me\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
*/


const { Client, GatewayIntentBits, EmbedBuilder, PermessionBitField, Permissions } = require(`discord.js`);

const prefix = '';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
  console.log("Bot is online!"); 

  client.user.setActivity(`Hi`, { type: "WATCHING" });

})

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //message array

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];
  const user = message.author;

  // set var

  var str = command;

  //commands

  if(str === 'id') {
    message.channel.send("Hi " + message.author.username + ", 你的地球人類編號為 : " + message.author.id )
    return;
  }
  else if(str === 'system id' || str === 'version' || str === 'system version' || str === 'bot version') {
    message.channel.send("v.1.2 updated date: 8-3-2023")
    return;
  }
 
  else if(str === 'marco' || str === '豪B仔' || str === '豪' || str === '王子豪' || str === 'aww' || str === 'awwmarco') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030184619615715438/WhatsApp_Image_2022-10-14_at_2.20.16_AM.jpeg")
    message.channel.send("豪B仔")
    return;
  }
  else if(str === '子豪') {
    message.channel.send("https://imgur.com/kcgdNlO")
    message.channel.send("豪B仔")
    return;
  }

  else if(str === '武術宗師' || str === '栢燊' || str === 'joe' || str === '祖' || str === '祖哥' || str === 'joe哥' || str === '背心祖') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030180125758722118/WhatsApp_Image_2022-10-14_at_2.05.51_AM.jpeg")
    message.channel.send("背心Joe")
    return;
  }

  else if(str === 'marcus' || str === '痕' || str === '富痕' || str === '富恒' || str === '麥富恒' || str === '恒爺' || str === '痕爺' || str === '富恆' || str === 'eternal' || str === '臭恆') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030178495684411543/WhatsApp_Image_2022-10-14_at_1.58.19_AM.jpeg")
    message.channel.send("痕爺")
    return;
  }
  else if(str === '臭') {
    message.channel.send("臭恆")
    return;
  }

  else if(str === 'manly' || str === '水魚' || str === '魚' || str === '深海の魚' || str === '深海魚') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030181597477076992/WhatsApp_Image_2022-10-14_at_2.08.01_AM.jpeg")
    message.channel.send("曼尼")
    return;
  }
  else if(str === '曼尼') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030181597477076992/WhatsApp_Image_2022-10-14_at_2.08.01_AM.jpeg")
    message.channel.send("Manly")
    return;
  }

  else if(str === '俊' || str === 'simon' || str === '西門' || str === '秩序哥') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030177365051064420/WhatsApp_Image_2022-10-14_at_1.56.19_AM.jpeg")
    message.channel.send("俊？邊撚度俊呀")
    return;
  }

  else if(str === '爛人俊') {
    message.channel.send("I totally agree with you! 他媽的爛人俊")
    return;
  }

  else if(str === '韋' || str === 'miracle' || str === '韋哥' || str === '㗎仔') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030178494975574036/WhatsApp_Image_2022-10-14_at_1.59.39_AM.jpeg")
    message.channel.send("韋哥")
    return;
  }
  
  else if(str === 'jimmy' || str === '輝' || str === '輝爺' || str === '渣渣輝' || str === '黃金牙' || str === '金牙') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030179556491006122/unknown.png")
    message.channel.send("渣渣輝")
    return;
  }

  else if(str === '樂熙' || str === 'alex' || str === 'alex' || str === '黃樂熙' || str === '肥仔波') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030177365738930256/WhatsApp_Image_2022-10-14_at_1.56.30_AM.jpeg")
    message.channel.send("奇奇怪怪嘅樂熙")
    return;
  }

  else if(str === '藍精靈') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030177365738930256/WhatsApp_Image_2022-10-14_at_1.56.30_AM.jpeg")
    return;
  }

  else if(str === '迪科' || str === 'Dirk' || str === 'dirk' || str === '迪科') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030178495206260826/WhatsApp_Image_2022-10-14_at_1.59.20_AM.jpeg")
    message.channel.send("大學生迪科")
    return;
  }

  else if(str === '宗煒' || str === '大屎忽' || str === 'michael' || str === 'michael wong' || str === 'big ass' || str === 'bigass' || str === 'rich boy') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030177365474680915/WhatsApp_Image_2022-10-14_at_1.56.06_AM.jpeg")
    message.channel.send("大屎忽")
    return;
  }

  else if(str === 'ken' || str === '丰' || str === '銘丰') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030182065628528691/WhatsApp_Image_2022-10-14_at_2.00.20_AM.jpeg")
    message.channel.send("又唔叫")
    return;
  }

  else if(str === '又唔叫') {
    message.channel.send("https://cdn.discordapp.com/attachments/601358481559257098/1030182065628528691/WhatsApp_Image_2022-10-14_at_2.00.20_AM.jpeg")
    message.channel.send("銘丰:又唔叫")
    return;
  }
  else if(str.match(/(|\W)禿頭(|\W)/)) {
    message.channel.send("禿頭韋")
    return;
  }

  else if(str.match(/(|\W)三層樓(|\W)/)) {
    message.channel.send("有錢煒 幾時送樓比我哋?")
    return;
  }
  else if(str === '習近平' || str === '中國小熊維尼' || str === '小熊維尼' || str === '習大大' ) {
    message.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Xi_Jinping_2019.jpg/220px-Xi_Jinping_2019.jpg")
    message.channel.send("習近平(習維尼)，祖籍河南鄧州，籍貫陝西富平，生於北京，中國共產黨、中華人民共和國政治人物，2012年起出任中共中央總書記和中共中央軍委主席，2013年起出任國家主席和國家軍委主席。")
    return;
  }
  else if(str === '肥仔') {
    message.channel.send("呢度有好多個肥仔 ")
    return;
  }
  else if(str === '死肥仔') {
    message.channel.send("呢度有好多個 ")
    return;
  }
  else if (str.match(/(|\W)你有咩問題(|\W)/)) {
    message.channel.send("我冇問題\n你有咩問題?")
    return;
  }
  else if (str.match(/(|\W)我冇問題(|\W)/)) {
    message.channel.send("你有咩問題?")
    return;
  }

  else if(str === 'on9' || str === '6uo' || str === 'on9仔') {
    message.channel.send("一定係水魚")
    return;
  }
  else if(str === '我叫基德') {
    message.channel.send("並沒有")
    return;
  }
  else if (str.match(/(|\W)基德(|\W)/)) {
    message.channel.send("https://media.tenor.com/q15XQ3vgQnwAAAAC/%E4%B8%8D%E8%A6%81%E7%9E%8E%E6%8E%B0-%E7%83%98%E7%84%99%E7%8E%8B.gif")
    message.channel.send("不要瞎掰好嗎！")
    return;
  }
  else if(str.match(/(|\W)跟屎一樣(|\W)/)) {
    message.channel.send("仲爛過屎")
    return;
  }
  else if(str === '.') {
    message.channel.send(".")
    return;
  }
  else if(str === '8') {
    message.channel.send("8")
    return;
  }
  else if(str === '88') {
    message.channel.send("88")
    return;
  }
  else if(str === 'no') {
    message.channel.send("屌你老母! "+ message.author.username)
    return;
  }
  else if(str === 'yes') {
    message.channel.send("yes你老母X2! " + message.author.username)
    return;
  }
  else if(str === 'hi') {
    message.channel.send("hi "+ message.author.username)
    return;
  }
  else if(str === '水魚既智商') {
    message.channel.send("無法計算")
    return;
  }
  else if(str === '水魚智商') {
    message.channel.send("無法計算")
    return;
  }
  else if(str === '又嬲') {
    message.channel.send("又嬲")
    return;
  }
  else if(str === '沒事發什麽動態') {
    message.channel.send("https://cdn.discordapp.com/attachments/559379039102566401/1027224376191492116/IMG_4498.png")
    message.channel.send("孤單山姆 現在要來了")
    return;
  }
  else if(str === '沒事發甚麼動態') {
    message.channel.send("https://cdn.discordapp.com/attachments/559379039102566401/1027224376191492116/IMG_4498.png")
    message.channel.send("孤單山姆 現在要來了")
    return;
  }
  else if(str === '對不起') {
    message.channel.send("對不起 曼尼")
    return;
  }
  else if(str === '你錯就錯在叫曼尼，唔叫鋒') {
    message.channel.send("兩件事你做啱一件都唔會變成咁")
    return;
  }
  else if(str === '笑死') {
    message.channel.send("笑死")
    return;
  }
  else if(str === '懶叫') {
    message.channel.send("藍叫")
    return;
  }
  else if(str === '？') {
    message.channel.send("我愛習近平")
    return;
  }
  else if(str === '?') {
    message.channel.send("我愛習近平")
    return;
  }
  else if(str === 'red sun in the sky' || str === '天上太阳红彤彤' || str === '天上太陽紅彤彤') {
    message.channel.send("天上太陽紅呀紅彤彤誒\n心中的太陽是毛澤東誒")
    message.channel.send("https://www.youtube.com/watch?v=1S4xFl4CD34")
    return;
  }

})

client.login(" ");
