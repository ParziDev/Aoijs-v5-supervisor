module.exports = {
  name: "mute",
  aliases: ["timeout", "sustur", "zamanaşımı"],
  code: `
  $sendDM[**$serverName** sunucusunda *$messageSlice[2]* sebebinden mutelendin.;$message[1]]
  $setUserVar[sicil;$getUserVar[sicil;$message[1]]\n**[ MUTE ]** \`$messageSlice[2]\` ( <@$authorID> );$message[1]]
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üye mutelendi!}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Sebep:$messageSlice[2]}{field:Süre:$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s; Saniye];m; Dakika];h; Saat];d; Gün]}{field:Yetkili:<@$authorID> - \`($authorID)\`}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye mutelendi!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı üye **$messageSlice[2]** sebebinden **$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s; Saniye];m; Dakika];h; Saat];d; Gün]** boyunca mutelendi.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $timeoutMember[$guildID;$message[1];$message[2];no;$messageSlice[2]]
  $onlyIf[$messageSlice[2]!=;$getServerVar[cross] <@$authorID>, Sebep gir.]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;];m;];h;];d;]]==true;$getServerVar[cross] <@$authorID>, Düzgün bir süre gir. \`Örnek: $getServerVar[prefix]mute @Parzi 15m küfür\`]
  $onlyIf[$checkContains[$message[2];s;m;h;d]==true;$getServerVar[cross] <@$authorID>, Düzgün bir süre gir. \`Örnek: $getServerVar[prefix]mute @Parzi 15m küfür\`]
  $onlyIf[$message[2]!=;$getServerVar[cross] <@$authorID>, Süre gir.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini muteleyemezsin.]
  $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$message[1]').isCommunicationDisabled()  ;yes]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten mutelenmiş.]
  $onlyIf[$message[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini muteleyemezsin.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  $onlyForRoles[$getServerVar[mutehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `,
};
