module.exports = [{
  name:"rol3",
  code:`
  $addButton[1;Kırmızı Koltuk;2;kk;no;♨️]
  $addButton[1;Doğruluk Cesaretlik;2;dc;no;🍷]
  $addButton[1;Vampir Köylü;2;vk;no;🧛]
Sunucumuzdaki **Vampir Köylü** oyunlarından haberdar olmak için __🧛 Vampir Köylü__ butonuna tıkla.
Sunucumuzdaki **Doğruluk Cesaretlik** oyunlarından haberdar olmak için __🍷 Doğruluk Cesaretlik__ butonuna tıkla.
Sunucumuzdaki **Kırmızı Koltuk** oyunlarından haberdar olmak için __♨️ Kırmızı Koltuk__ butonuna tıkla.
  $onlyPerms[admin;]
  `
  },{
    name:"vk",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[vk]> Rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[vk]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[vk]]==false;]
    `
    },{
    name:"vk",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[vk]> Rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[vk]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[vk]]==true;]
    `
    },{
    name:"dc",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[dc]> Rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[dc]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[dc]]==false;]
    `
    },{
    name:"dc",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[dc]> Rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[dc]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[dc]]==true;]
    `
    },{
    name:"kk",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[kk]> Rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[kk]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[kk]]==false;]
    `
    },{
    name:"kk",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[kk]> Rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[kk]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[kk]]==true;]
    `
    }]
