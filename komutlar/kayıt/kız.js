module.exports = {
  name:"kız",
  aliases:"k",
  description:"Üyeyi kız olarak kayıt eder",
  code:`
  $setUserVar[yaş;$message[3];$message[1]]
  $setUserVar[isim;$message[2];$message[1]]
  $setUserVar[cinsiyet;kız;$message[1]]
  $setUserVar[kke;$authorID;$message[1]]
  $setUserVar[toplamk;$sum[$getUserVar[toplamk];1]]
  $setUserVar[kızk;$sum[$getUserVar[kızk];1]]
  $channelSendMessage[$getServerVar[chat];<@$message[1]> Aramıza yeni bir prenses katıldı.]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye kayıt edildi!}{description:$getServerVar[tick] <@$message[1]> adlı üye kız olarak kayıt edildi.}{footer:Developed By ParzivâL}{color:ffffff}{thumbnail:$userAvatar[$message[1]]}}]
  $giveRole[$guildID;$message[1];$getServerVar[kız]]
  $takeRole[$guildID;$message[1];$getServerVar[kayıtsız]]
  $changeNickname[$message[1];• $message[2] | $message[3]]
  $onlyIf[$isNumber[$message[3]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$message[2]!=;$getServerVar[cross] <@$authorID>, Üyenin ismini gir.]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[kayıtsız]]==true;$getServerVar[cross] <@$authorID>, Üye zaten kayıt olmuş.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Üyenin ID'sini gir.]
  $onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
