module.exports = {
  name:"vip",
  $if:"v4",
  code:`
  $if[$message[1]==ver]
  $description[1;$getServerVar[tick] \`$userTag[$message[1]]\` adlı kullanıcıya <@&$getServerVar[vip]> rolü verildi.]
  $color[1;BLUE]
  $footer[1;Developed by ParzivâL]
  $giveRole[$guildID;$message[1];$getServerVar[vip]]
  $endif
  $if[$message[1]==al]
  $description[1;$getServerVar[tick] \`$userTag[$message[1]]\` adlı kullanıcıdan <@&$getServerVar[vip]> rolü alındı.]
  $color[1;BLUE]
  $footer[1;Developed by ParzivâL]
  $takeRole[$guildID;$message[1];$getServerVar[vip]]
  $endif
  $onlyIf[$message[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini vip veremezsin.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  $onlyPerms[admin;$hetServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
