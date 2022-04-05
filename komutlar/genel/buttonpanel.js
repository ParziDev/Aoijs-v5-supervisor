module.exports = [{
  name:"button-panel",
  code:`
  $addButton[1;5;2;buttonpanel5;no]
  $addButton[1;4;2;buttonpanel4;no]
  $addButton[1;3;2;buttonpanel3;no]
  $addButton[1;2;2;buttonpanel2;no]
  $addButton[1;1;2;buttonpanel1;no]
> Aşağıdaki butonlar ile menüyü yönetebilirsiniz.
**1** __*Sunucuya katıldığınız tarihi gösterir.*__
**2** __*Sunucudaki rollerinizi gösterir.*__
**3** __*Sicilinizi gösterir.*__
**4** __*Önceki isimlerinizi gösterir.*__
**5** __*Üye ve taglı sayımızı gösterir.*__
  `
  },{
    name:"buttonpanel1",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[Sunucumuza <t:$truncate[$divide[$memberJoinedDate[$authorID;$guildID];1000]]:F> tarihinde girmişsin.;;;;;yes]
    `
    },{
    name:"buttonpanel2",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[$userRoles[$authorID;$guildID;mention; | ];;;;;yes]
    `
    },{
    name:"buttonpanel3",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:$getUserVar[sicil]}{color:010307}{thumbnail:$authorAvatar}{footer:Developed by ParzivâL}};;;;yes]
    $onlyIf[$getUserVar[sicil]!=;{ "content":"<@$authorID>, Sicilin boş.","ephemeral": true, "options":{ "interaction": true}}]
    `
    },{
    name:"buttonpanel4",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:$getUserVar[isimler]}{color:010307}{thumbnail:$authorAvatar}{footer:Developed by ParzivâL}};;;;yes]
    $onlyIf[$getUserVar[isimler]!=;{ "content":"<@$authorID>, Önceki ismin yok.","ephemeral": true, "options":{ "interaction": true}}]
    `
    },{
    name:"buttonpanel5",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[Sunucumuzda toplam \`$membersCount\` kullanıcı bulunmakta.;;;;;yes]
    `
    }]
