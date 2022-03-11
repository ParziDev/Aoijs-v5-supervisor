module.exports = {
  name:"top",
  aliases:"lb",
  description:"",
  code:`
  $author[1;Kayıt Sıralamalası;$authorAvatar]
  $description[1;**➥ Toplam Kayıt Sıralaması**
  \`$userLeaderboard[$guildID;toplamk;asc;{top} - {username} - {value}]\`

**➥ Kız Kayıt Sıralaması**
  \`$userLeaderboard[$guildID;kızk;asc;{top} - {username} - {value}]\`

**➥ Erkek Kayıt Sıralaması**
  \`$userLeaderboard[$guildID;erkekk;asc;{top} - {username} - {value}]\`]
$footer[1;Developed by ParzivâL]
$color[1;ffffff]
$thumbnail[1;$authorAvatar]
$onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
  }
