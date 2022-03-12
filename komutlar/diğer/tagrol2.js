module.exports = [{
  name:"$alwaysExecute",
  code:`
  $forEachMember[1;{};tagrol4;]
  $forEachMember[1;{};tagrol3;]
  $serverCooldown[30s;]
  $onlyIf[$getServerVar[etikettag]!=;]
  `
  },{
    name:"tagrol3",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[taglog];{newEmbed:{author:$userTag:$authorAvatar}{description:<@$authorID> adlı üye tagımızı aldı ve <@&$getServerVar[tagrol]> rolü verildi.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $giveRole[$guildID;$authorID;$getServerVar[tagrol]]
    $changeNickname[$authorID;$replaceText[$nickname;•;$getServerVar[tag]]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]==false;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[yasaklırol]]==false;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[jailrol]]==false;]
    $onlyIf[$checkContains[$userTag;$getServerVar[etikettag]]==true;]
    `
  },{
    name:"tagrol4",
    type:"awaited",
    code:`
    $channelSendMessage[$getServerVar[taglog];{newEmbed:{author:$userTag:$authorAvatar}{description:<@$authorID> adlı üye tagımızı bıraktı ve <@&$getServerVar[tagrol]> rolü alındı.}{color:GREEN}{footer:Developed by ParzivâL}}]
    $takeRole[$guildID;$authorID;$getServerVar[tagrol]]
    $changeNickname[$authorID;$replaceText[$nickname;$getServerVar[tag];•]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[tagrol]]==true;]
    $onlyIf[$checkContains[$userTag;$getServerVar[etikettag]]==false;]
    `
    }]
