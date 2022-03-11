module.exports = {
  name:"nerede",
  code:`
  $addField[1;Kanaldaki diğer kullanıcılar;$usersInChannel[$voiceID[$message[1]];mention]]
  $addField[1;Kullanıcı hangi kanalda?;<#$voiceID[$message[1]]> - \`$channelName[$voiceID[$message[1]]]\`]
  $color[1;ff0000]
  $footer[1;Developed by ParzivâL]
  $thumbnail[1;$userAvatar[$message[1]]]
  $onlyIf[$voiceID[$message[1]]!=;$getServerVar[cross] <@$authorID>, Kullanıcı herhangi bir ses kanalında değil.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcının ID'si gir.]
  `
  }
