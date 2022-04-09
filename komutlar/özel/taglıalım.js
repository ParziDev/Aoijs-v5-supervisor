module.exports = {
  name:"taglıalım",
  aliases:["talım"],
  $if:"v4",
  code:`
  $if[$message[1]==aç]
  $getServerVar[tick] <@$authorID>, Taglı alım açık hale getirildi.
  $setServerVar[taglıalım;true]
  $onlyIf[$getServerVar[taglıalım]==false;$getServerVar[cross] <@$authorID>, Taglı alım zaten açık.]
  $endif
  $if[$message[1]==kapat]
  $getServerVar[tick] <@$authorID>, Taglı alım kapalı hale getirildi.
  $setServerVar[taglıalım;false]
  $onlyIf[$getServerVar[taglıalım]==true;$getServerVar[cross] <@$authorID>, Taglı alım zaten kapalı.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;$getServerVar[cross] <@$authorID>, **aç** veya **kapat** seçeneklerini kullanın.]
  $onlyIf[$getServerVar[taglog]!=;$getServerVar[cross] <@$authorID>, **tag** , **tagrol** , **taglog** ayarlarını kurup tekrar deneyin.]
  $onlyIf[$getServerVar[tagrol]!=;$getServerVar[cross] <@$authorID>, **tag** , **tagrol** , **taglog** ayarlarını kurup tekrar deneyin.]
  $onlyIf[$getServerVar[tag]!=;$getServerVar[cross] <@$authorID>, **tag** , **tagrol** , **taglog** ayarlarını kurup tekrar deneyin.]
  $onlyPerms[admin;]
  `
  }
