module.exports = {
  name:"unmute",
  code:`
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üyenin mutesi açıldı!}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Yetkili:<@$authorID> - \`($authorID)\`}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üyenin mutesi açıldı!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı üyenin mutesi açıldı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $timeoutMember[$guildID;$message[1];0;no;Remove Timeout]
  $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$message[1]').isCommunicationDisabled()  ;yes]==true;$getServerVar[cross] <@$authorID>, Bu kullanıcı zaten mutelenmemiş.] 
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  $onlyForRoles[$getServerVar[mutehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
