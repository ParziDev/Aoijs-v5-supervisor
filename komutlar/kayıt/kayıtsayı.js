module.exports = {
  name:"kayıtsayı",
  aliases:["ks","kayıt-sayı","teyitsayı"],
  code:`
  $author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
  $description[1;**➥ Toplam Kayıt Sayısı:** $getUserVar[toplamk;$mentioned[1]]

**➥ Erkek Kayıt Sayısı:** $getUserVar[erkekk;$mentioned[1]]

**➥ Kız Kayıt Sayısı:** $getUserVar[kızk;$mentioned[1]]]
  $color[1;ffffff]
  $footer[1;Developed by ParzivâL]
  $thumbnail[1;$userAvatar[$mentioned[1]]]
  $onlyForRoles[$getServerVar[registerhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
