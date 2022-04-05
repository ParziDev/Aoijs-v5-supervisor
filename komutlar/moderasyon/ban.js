module.exports = [{
  name:"ban",
  aliases:"yasakla",
  code:`
  $sendDM[**$serverName** sunucusundan *$messageSlice[1]* sebebinden banlandın.;$message[1]]
  $setUserVar[sicil;$getUserVar[sicil;$message[1]]\n**[ BAN ]** \`$messageSlice[1]\` ( <@$authorID> );$message[1]]
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{author:Bir üye banlandı:$userAvatar[$message[1]]}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Sebep:$messageSlice[1]}{field:Yetkili:<@$authorID> - \`($authorID)\`}{footer:Developed by ParzivâL}{color:010307}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye banlandı!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı kullanıcı **$messageSlice[1]** sebebinden banlandı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $ban[$message[1];$guildID;0;$messageSlice[1]]
  $onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Sebep gir.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini banlayamazsın.]
  $onlyIf[$isBanned[$message[1]]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten banlanmış.]
  $onlyIf[$message[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini banlayamazsın.]
  $onlyIf[$memberExists[$message[1]]==true;{execute:ban1}]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'sini gir.]
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  $suppressErrors
  `
  },{
    name:"ban1",
    type:"awaited",
    code:`
  $sendDM[**$serverName** sunucusundan **$messageSlice[1]** sebebinden banlandın.;$message[1]]
  $setUserVar[sicil;$getUserVar[sicil;$message[1]]\n**[ BAN ]** \`$messageSlice[1]\` ( <@$authorID> );$message[1]]
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üye banlandı}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Sebep:$messageSlice[1]}{field:Yetkili:<@$authorID> - \`($authorID)\`}{footer:Developed by ParzivâL}{color:010307}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye banlandı!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı kullanıcı *__$messageSlice[1]__* sebebinden banlandı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $ban[$message[1];$guildID;0;$messageSlice[1]]
  $onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Sebep gir.]
  $onlyIf[$isBanned[$message[1]]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten banlanmış.]
  $onlyIf[$message[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini banlayamazsın.]
  $suppressErrors
    `
    }]
