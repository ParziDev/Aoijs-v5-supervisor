const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/") 

//////////////////// CALLBACKS \\\\\\\\\\\\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()

//////////////////// STATUS \\\\\\\\\\\\\\\\\\\\
bot.status({
  text:"ParzivâL",
  type:"PLAYING",
  status:"dnd",
  time: 12
})

//////////////////// VARİABLES \\\\\\\\\\\\\\\\\\\\

//Genel
bot.variables({
  prefix:".",//Prefix
  tick:"",//Onay emoji ID örn: ✅
  cross:"",//Red emoji ID örn: ❎
  afk:"no",//Elleme
  afksayı:"0",//Elleme
  afksebep:"",//Elleme
  booster:"",//Booster rol ID
  vip:""//Vip rol ID
})

//Kayıt
bot.variables({
  kayıtsız:"",//Kayıtsız rolü ID
  erkek:"",//Erkek rolü ID
  kız:"",//Kız rolü ID
  registerhammer:"",//Kayıt Yetkilisi rolü ID
  register:"",//Hoşgeldin kanalı ID
  chat:"",//Chat kanalı ID
  cinsiyet:"",//Elleme
  isimler:"",//Elleme
  isim:"İsim",//Elleme
  yaş:"Yaş",//Elleme
  kke:"",//Elleme
  toplamk:"0",//Elleme
  kızk:"0",//Elleme
  erkekk:"0"//Elleme
})

//Moderasyon
bot.variables({
  yhrol:"",//Yeni hesap rolü ID
  yhlog:"",//Yeni hesap logu ID
  cezalog:"",//Moderasyon log kanalı ID
  banhammer:"",//Ban yetkilisi rolü ID
  mutehammer:"",//Mute yetkilisi rolü ID
  jailhammer:"",//Jail yetkilisi rolü ID
  jailrol:"",//Jail rolü ID
  jail:"no",//Elleme
  sicil:"",//Elleme
  snipe1:"",//Elleme
  snipe2:"",//Elleme
  snipe3:""//Elleme
})

//Diğer
bot.variables({
  tag:"",//Tag
  tagrol:"",//Tag rolü ID
  taglog:"",//Tag log ID
  yasaklıtag:"",//Yasaklı taglar örnek: tag1;tag2;tag3
  yasaklırol:"",//Yasaklı tag rol ID
  yasaklılog:""//Yasaklı tag log ID
})

//Button rol
bot.variables({
  çekiliş:"",//Çekiliş katılımcısı rol ID
  etkinlik:"",//Etkinlik katılımcısı rol ID
  ikizler:"",//Burç rolü ID
  terazi:"",//Burç rolü ID
  yay:"",//Burç rolü ID
  balık:"",//Burç rolü ID
  kova:"",//Burç rolü ID
  oğlak:"",//Burç rolü ID
  boğa:"",//Burç rolü ID
  akrep:"",//Burç rolü ID
  yengeç:"",//Burç rolü ID
  koç:"",//Burç rolü ID
  aslan:"",//Burç rolü ID
  başak:"",//Burç rolü ID
  id:""//Elleme
})

//////////////////// COMMANDS \\\\\\\\\\\\\\\\\\\\

//Hoşgeldin
bot.joinCommand({
  channel:"$getServerVar[register]",
  $if:"v4",
  code:`
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$multi[$multi[$multi[$multi[7;24];60];60];1000]]
$sendDM[**$serverName** sunucumuzda hesabın 7 günden önce açıldığı için cezalandırıldın.;$authorID;no]
$channelSendMessage[$getServerVar[yhlog];$getServerVar[tick] <@$authorID> Hesabın yeni olduğu için **$roleName[$getServerVar[yhrol]]** rolün verildi.]
$getServerVar[tick] \`$userTag\` adlı üyenin hesabı 7 günden önce açıldığı için cezalandırıldı.
$setUserVar[cinsiyet;kayıtsız]
$changeNickname[$authorID;• Yeni | Hesap]
$giveRoles[$guildID;$authorID;$getServerVar[yhrol]]
$else

**🎉 Aramıza hoşgeldin <@$authorID>.

Seninle beraber \`$membersCount\` üyeyiz.

Kayıt olmak için <@&$getServerVar[registerhammer]> rolündeki üyeleri bekleyin.

Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve];seconds;Saniye];minutes;Dakika];hours;Saat];days;Gün];months;Ay];weeks;Hafta];years;Yıl];second;Saniye];minute;Dakika];hour;Saat];month;Ay];year;Yıl];week;Hafta]\` önce kurulmuş.**

$setUserVar[cinsiyet;kayıtsız]
$giveRoles[$guildID;$authorID;$getServerVar[kayıtsız]]
$changeNickname[$authorID;• İsim | Yaş]
$endif
$onlyIf[$getUserVar[jail]==no;{execute:jail1}]
  `
})
bot.awaitedCommand({
  name:"jail1",
  code:`
  $getServerVar[tick] \`$userTag\` adlı üye jail'de olduğu için cezalandırıldı.
  $giveRole[$guildID;$author;$getServerVar[jailrol]]
  `
  })

//Snipe
bot.deletedCommand({
  channel:"$channelID",
  code:`
  $setServerVar[snipe3;$message]
  $setServerVar[snipe2;$channelUsed]
  $setServerVar[snipe1;$authorID]
  $onlyIf[$isBot[$authorID]==false;]
  `
  })
