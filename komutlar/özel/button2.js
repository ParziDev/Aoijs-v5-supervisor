module.exports = [{
  name:"rol2",
  code:`
  $addButton[1;Bekarlık Sultanlıktır;3;bekarlık;no;🖤]
  $addButton[1;Sevgilim Yok;3;sevgilimyok;no;🤍]
  $addButton[1;Sevgilim Var;3;sevgilimvar;no;❤️]
Sevgilin **var** ise __❤️ Sevgilim Var__ butonuna tıkla.

Sevgilin **yok** ise __🤍 Sevgilim Yok__ butonuna tıkla.

Sevgili **yapmıyor** isen __🖤 Bekarlık Sultanlıktır__ butonuna tıkla.
  $onlyPerms[admin;]
  `
  },{
    name:"sevgilimvar",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[sevgilimvar]> rolün **verildi!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimyok]]
    $giveRole[$guildID;$authorID;$getServerVar[sevgilimvar]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[sevgilimvar]]==false;]
    `
    },{
    name:"sevgilimvar",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[sevgilimvar]> rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimvar]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[sevgilimvar]]==true;]
    `
    },{
    name:"sevgilimyok",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[sevgilimyok]> rolün **verildi!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]
    $giveRole[$guildID;$authorID;$getServerVar[sevgilimyok]]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimvar]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[sevgilimyok]]==false;]
    `
    },{
    name:"sevgilimyok",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[sevgilimyok]> rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimyok]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[sevgilimyok]]==true;]
    `
    },{
    name:"bekarlık",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[bekarlıksultanlıktır]> rolün **verildi!**;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimyok]]
    $takeRole[$guildID;$authorID;$getServerVar[sevgilimvar]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]==false;]
    `
    },{
    name:"bekarlık",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[<@&$getServerVar[bekarlıksultanlıktır]> rolün **alındı!**;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]
    $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[bekarlıksultanlıktır]]==true;]
    `
    }]
