module.exports = {
  name:"kayıtsız",
  aliases:"unreg",
  description:"Üyeyi kayıtsıza geri atar",
  code:`
  $channelSendMessage[$channelID;{newEmbed:{author:Üye kayıtsıza atıldı!}{description:$getServerVar[tick] <@$message[1]> adlı üye kayıtsıza atıldı.}{footer:Developed by ParzivâL}{color:ffffff}{thumbnail:$userAvatar[$message[1]]}}]
  $setRoles[$guildID;$message[1];$getServerVar[kayıtsız]]
  $setUserVar[cinsiyet;kayıtsız;$message[1]]
  $changeNickname[$message[1];• İsim | Yaş]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[kayıtsız]]==false;$getServerVar[cross] <@$authorID>, Üye zaten kayıtsız.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Üyenin ID'sini gir.]
  $onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
}
