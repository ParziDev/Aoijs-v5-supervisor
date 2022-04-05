module.exports = {
  name:"isimler",
  code:`
  $author[1;$userTag[$message[1]];$userAvatar[$message[1]]]
  $description[1;$getUserVar[isimler;$message[1]]]
  $color[1;ffffff]
  $thumbnail[1;$userAvatar[$message[1]]
  $footer[1;Developed by ParzivâL]
  $onlyIf[$getUserVar[isimler;$message[1]]!=;$getServerVar[cross] <@$authorID>, Kullanıcının önceki ismi yok.]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  $onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
