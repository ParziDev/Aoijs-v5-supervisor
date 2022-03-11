module.exports = {
  name:"jail",
  aliases:["hapis","hapishane","allahkurtarsın"],
  code:`
  $sendDM[**$serverName** sunucusunda *$messageSlice[1]* sebebinden jaile atıldın.;$message[1]]
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üye jaile atıldı!}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Sebep:$messageSlice[1]}{field:Yetkili:<@$authorID> - \`($authorID)\`}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye jaile atıldı}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı üye **$messageSlice[1]** sebebinden jaile atıldı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $setRoles[$guildID;$message[1];$getServerVar[jailrol]]
  $setUserVar[jail;yes;$message[1]]
  $onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Sebep gir.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini jaile atamazsın.]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[jailrol]]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten jaile atılmış.]
  $onlyIf[$message[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini jaile atamazsın.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  $onlyForRoles[$getServerVar[jailhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
