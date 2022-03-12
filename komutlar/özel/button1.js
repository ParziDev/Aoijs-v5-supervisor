module.exports = [{
  name:"rol1",
  code:`
  $addButton[1;Etkinlik Katılımcısı;1;etkinlik1;no;🥳]
  $addButton[1;Çekiliş Katılımcısı;1;çekiliş1;no;🎉]
  Aşağıdaki butonlardan rollerini seçebilirsin.
  $onlyPerms[admin;]`
  },{
type: 'interaction',
prototype: 'button',
code: `
$if[$hasRoles[$guildID;$authorID;$getServerVar[çekiliş]]==true;{execute:çekiliş2};{execute:çekiliş3}]
$setServerVar[id;$authorID]
$onlyIf[$interactionData[customId]==çekiliş1;]
`
} ,{
  name:"çekiliş2",
  type:"awaited",
  prototype:"button",
  code:`
  $interactionReply[<@&$getServerVar[çekiliş]> Rolün alındı.;;;;;yes]
  $takeRole[$guildID;$getServerVar[id];$getServerVar[çekiliş]]
  `
  },{
  name:"çekiliş3",
  type:"awaited",
  prototype:"button",
  code:`
  $interactionReply[<@&$getServerVar[çekiliş]> Rolün verildi.;;;;;yes]
  $giveRole[$guildID;$getServerVar[id];$getServerVar[çekiliş]]
  `
  },{
type: 'interaction',
prototype: 'button',
code: `
$if[$hasRoles[$guildID;$authorID;$getServerVar[etkinlik]]==true;{execute:etkinlik2};{execute:etkinlik3}]
$setServerVar[id;$authorID]
$onlyIf[$interactionData[customId]==etkinlik1;]
`
},{
  name:"etkinlik2",
  type:"awaited",
  prototype:"button",
  code:`
  $interactionReply[<@&$getServerVar[etkinlik]> Rolün alındı.;;;;;yes]
  $takeRole[$guildID;$getServerVar[id];$getServerVar[etkinlik]]
  `
  },{
  name:"etkinlik3",
  type:"awaited",
  prototype:"button",
  code:`
  $interactionReply[<@&$getServerVar[etkinlik]> Rolün verildi.;;;;;yes]
  $giveRole[$guildID;$getServerVar[id];$getServerVar[etkinlik]]
  `
  }]
