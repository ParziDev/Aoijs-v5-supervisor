module.exports = {
  name:"snipe",
  code:`
  $deleteIn[7s]
  $author[1;Son silinen mesaj;$userAvatar[$getServerVar[snipe1]]]
  $addField[1;Silinen Mesaj;\`\`\`js
$getServerVar[snipe3]\`\`\`]
  $addField[1;Silindiği Kanal;<#$getServerVar[snipe2]> - \`($getServerVar[snipe2])\`]
  $addField[1;Silen Kullanıcı;<@$getServerVar[snipe1]> - \`($getServerVar[snipe1])\`]
  $color[1;010307]
  $onlyPerms[admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
