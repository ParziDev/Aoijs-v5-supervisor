module.exports = {
  name:"unban",
  code:`
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üyenin banı açıldı!}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Yetkili:<@$authorID> - \`($authorID)\`}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üyenin banı açıldı!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı kullanıcının banı açıldı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}]
  $unban[$message[1]]
  $onlyIf[$isBanned[$message[1]]==true;$getServerVar[cross] <@$authorID>, Bu kullanıcı zaten banlanmamış.]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
