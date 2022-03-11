module.exports = [{
  name:"$alwaysExecute",
  code:`
  $forEachMember[1;{};yasaklı2;]
  $forEachMember[1;{};yasaklı1;]
  $serverCooldown[30s;]
  $onlyIf[$getServerVar[yasaklıtag]!=;]
  `
  },{
    name:"yasaklı1",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[yasaklılog];{newEmbed:{description:<@$authorID> adlı üye yasaklı bir tag taşıdığı için cezalandırıldı.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $setRoles[$guildID;$authorID;$getServerVar[yasaklırol]]
    $changeNickname[$authorID;• Yasaklı | Tag]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[yasaklırol]]==false;]
    $onlyIf[$checkContains[$userTag;$getServerVar[yasaklıtag]]==true;]
    `
  },{
    name:"yasaklı2",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[yasaklılog];{newEmbed:{description:<@$authorID> adlı üye yasaklı olan tagı bıraktı ve cezası kaldırıldı.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $giveRole[$guildID;$authorID;$replaceText[$replaceText[$replaceText[$getUserVar[cinsiyet];erkek;$getServerVar[erkek]];kız;$getServerVar[kız]];kayıtsız;$getServerVar[kayıtsız]]]
    $takeRole[$guildID;$authorID;$getServerVar[yasaklırol]]
    $changeNickname[$authorID;• $getUserVar[isim] | $getUserVar[yaş]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[yasaklırol]]==true;]
    $onlyIf[$checkContains[$userTag;$getServerVar[yasaklıtag]]==false;]
    `
    }]
