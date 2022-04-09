module.exports = (bot) => {

//Genel
bot.variables({
  prefix:".",//Prefix
  tick:"✅",//Onay emoji ID örn: ✅
  cross:"❎",//Red emoji ID örn: ❎
  afk:"no",//Elleme
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
  tag:"¿",//Tag
  tagrol:"",//Tag rolü ID
  taglog:"",//Tag log ID
  yasaklıtag:"",//Yasaklı taglar örnek: tag1;tag2;tag3
  yasaklırol:"",//Yasaklı tag rol ID
  yasaklılog:"",//Yasaklı tag log ID
  taglıalım:"false"
})

//Button rol
bot.variables({
  çekiliş:"",//Çekiliş katılımcısı rol ID
  etkinlik:"",//Etkinlik katılımcısı rol ID
  sevgilimvar:"",//Sevgilim var rol ID
  sevgilimyok:"",//Sevgilim yok rol ID
  bekarlıksultanlıktır:"",//Sevgili yapmıyorum rol ID
  dc:"",//Doğruluk Cesaretlik rol ID
  vk:"",//Vampir Köylü rol ID
  kk:"",//Kırmızı Koltuk rol ID
  ikizler:"",//Burç rol ID
  terazi:"",//Burç rol ID
  yay:"",//Burç rol ID
  balık:"",//Burç rol ID
  kova:"",//Burç rol ID
  oğlak:"",//Burç rol ID
  boğa:"",//Burç rol ID
  akrep:"",//Burç rol ID
  yengeç:"",//Burç rol ID
  koç:"",//Burç rol ID
  aslan:"",//Burç rol ID
  başak:""//Burç rol ID
})
  
}
