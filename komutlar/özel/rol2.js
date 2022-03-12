module.exports = [{
  name:"rol2",
  code:`
  $deleteCommand
  Aşağıdaki menüden burcunu seçebilirsin.
  $addSelectMenu[1;burçlar;Burcunu seç!;1;1;false;Rolü bırak:Burç rolünü bırakmak için tıkla.:12:false:🗑️;İkizler:İkizler burcu rolü almak için tıkla.:0:false:♊;Terazi:Terazi burcu rolü almak için tıkla.:1:false:♎;Yay:Yay burcu rolü almak için tıkla.:2:false:♐;Balık:Balık burcu rolü almak için tıkla.:3:false:♓;Kova:Kova burcu rolü almak için tıkla.:4:false:♒;Oğlak:Oğlak burcu rolü almak için tıkla.:5:false:♑;Boğa:Boğa rolü almak için tıkla.:6:false:♉;Akrep:Akrep burcu rolü almak için tıkla.:7:false:♏;Yengeç:Yengeç burcu rolü almak için tıkla.:8:false:♋;Koç:Koç burcu rolü almak için tıkla.:9:false:♈;Aslan:Aslan burcu rolü almak için tıkla.:10:false:♌;Başak:Başak burcu rolü almak için tıkla.:11:false:♍]
  $onlyPerms[admin;]
  `
  },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[İkizler burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[ikizler]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==0;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Terazi burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[terazi]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==1;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Yay burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[yay]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==2;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Balık burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[balık]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==3;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Kova burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[kova]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==4;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Oğlak burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[oğlak]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==5;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Boğa burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[boğa]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==6;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Akrep burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[akrep]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==7;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Yengeç burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[yengeç]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==8;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Koç burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[koç]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==9;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Aslan burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[aslan]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==10;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Başak burcu rolün verildi.;;;;;yes]
    $giveRole[$guildID;$authorID;$getServerVar[başak]]
    $onlyIf[$hasAnyRole[$guildID;$authorID;$getServerVar[ikizler];$getServerVar[terazi];$getServerVar[yay];$getServerVar[balık];$getServerVar[kova];$getServerVar[oğlak];$getServerVar[boğa];$getServerVar[akrep];$getServerVar[yengeç];$getServerVar[koç];$getServerVar[aslan];$getServerVar[başak]]==false;{
"content": "Zaten bir burç rolü almışsın. Menüden bırak seçeneğine tıklayıp tekrar deneyin.",
"ephemeral": true, 
"options":{
	"interaction" : true
}
}] 
    $onlyIf[$interactionData[values[0]]==11;]
    `
    },{
    name:"burçlar",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[Burç rolün alındı.;;;;;yes]
    $takeRole[$guildID;$authorID;$getServerVar[ikizler]]
    $takeRole[$guildID;$authorID;$getServerVar[yay]]
    $takeRole[$guildID;$authorID;$getServerVar[balık]]
    $takeRole[$guildID;$authorID;$getServerVar[kova]]
    $takeRole[$guildID;$authorID;$getServerVar[oğlak]]
    $takeRole[$guildID;$authorID;$getServerVar[boğa]]
    $takeRole[$guildID;$authorID;$getServerVar[akrep]]
    $takeRole[$guildID;$authorID;$getServerVar[yengeç]]
    $takeRole[$guildID;$authorID;$getServerVar[koç]]
    $takeRole[$guildID;$authorID;$getServerVar[aslan]]
    $takeRole[$guildID;$authorID;$getServerVar[başak]]
    $takeRole[$guildID;$authorID;$getServerVar[terazi]]
    $onlyIf[$interactionData[values[0]]==12;]
    `
    }]
