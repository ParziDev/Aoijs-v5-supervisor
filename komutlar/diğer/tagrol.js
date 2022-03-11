module.exports = [{
  name:"$alwaysExecute",
  code:`
  $forEachMember[1;{};tagrol2;]
  $forEachMember[1;{};tagrol1;]
  $serverCooldown[30s;]
  $onlyIf[$getServerVar[tag]!=;]
  `
  },{
    name:"tagrol1",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[taglog];{newEmbed:{author:$userTag:$authorAvatar}{description:<@$authorID> adlı üye tagımızı aldı ve <@&$getServerVar[tagrol]> rolü verildi.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $giveRole[$guildID;$authorID;$getServerVar[tagrol]]
    $changeNickname[$authorID;$replaceText[$nickname;•;$getServerVar[tag]]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]==false;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[yasaklırol]]==false;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[jailrol]]==false;]
    $onlyIf[$checkContains[$userTag;$getServerVar[tag]]==true;]
    `
  },{
    name:"tagrol2",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[taglog];{newEmbed:{author:$userTag:$authorAvatar}{description:<@$authorID> adlı üye tagımızı bıraktı ve <@&$getServerVar[tagrol]> rolü alındı.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $takeRole[$guildID;$authorID;$getServerVar[tagrol]]
    $changeNickname[$authorID;$replaceText[$nickname;$getServerVar[tag];•]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]==true;]
    $onlyIf[$checkContains[$userTag;$getServerVar[tag]]==false;]
    `
    }]
