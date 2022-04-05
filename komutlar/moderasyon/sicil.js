module.exports = {
  name:"sicil",
  code:` 
  $author[1;$userTag[$message[1]];$userAvatar[$message[1]]]
  $description[1;Kullanıcının sicili

$getUserVar[sicil;$message[1]]]
  $color[1;010307]
  $thumbnail[1;$userAvatar[$message[1]]
  $footer[1;Developed by ParzivâL]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  $onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
