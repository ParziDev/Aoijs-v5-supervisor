module.exports = {
  name: "unjail",
  code: `
  $channelSendMessage[$getServerVar[cezalog];{newEmbed:{description:Bir üye jailden çıkarıldı!}{field:Kullanıcı:$userTag[$message[1]] - \`($message[1])\`}{field:Yetkili:<@$authorID> - \`($authorID)\`}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $channelSendMessage[$channelID;{newEmbed:{author:Üye jailden çıkarıldı!}{description:$getServerVar[tick] \`$userTag[$message[1]]\` adlı üye jailden çıkarıldı.}{color:010307}{footer:Developed by ParzivâL}{thumbnail:$userAvatar[$message[1]]}}]
  $setUserVar[jail;no;$message[1]]
  $giveRole[$guildID;$message[1];$replaceText[$replaceText[$replaceText[$getUserVar[cinsiyet;$message[1]];kayıtsız;$getServerVar[kayıtsız]];erkek;$getServerVar[erkek]];kız;$getServerVar[kız]]]
  $takeRole[$guildID;$message[1];$getServerVar[jailrol]]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[jailrol]]==true;$getServerVar[cross] <@$authorID>, Bu kullanıcı zaten jaile atılmamış.] 
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  $onlyForRoles[$getServerVar[jailhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `,
};
