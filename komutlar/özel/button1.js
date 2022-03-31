module.exports = [{
  name:"rol1",
  code:`
  $addButton[1;Etkinlik Katılımcısı;3;etkinlik;no;🥳]
  $addButton[1;Çekiliş Katılımcısı;3;çekiliş;no;🎉]
  Sunucumuzdaki **çekilişlerden** haberdar olmak için __🎉 Çekiliş Katılımcısı__ butonuna tıklayın.
  
Sunucumuzdaki **etkinliklerden** haberdar olmak için __🥳 Etkinlik Katılımcısı__ butonuna tıklayın.
  $onlyPerms[admin;]
  `
  },{
    name:"çekiliş",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[çekiliş]> Rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[çekiliş]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[çekiliş]]==false;]
    `
    },{
    name:"çekiliş",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[çekiliş]> Rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[çekiliş]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[çekiliş]]==true;]
    `
    },{
    name:"etkinlik",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[etkinlik]> Rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[etkinlik]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[etkinlik]]==false;]
    `
    },{
    name:"etkinlik",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[etkinlik]> Rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[etkinlik]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[etkinlik]]==true;]
    `
    }]
