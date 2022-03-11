module.exports = {
  name:"zengin",
  code:`
  $description[1;$getServerVar[tick] \`$nickname\` adlı üyenin nicki \`$message\` olarak değiştirildi.]
  $color[1;BLUE]
  $footer[1;Developed by ParzivâL]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Yeni nickini gir.]
  $onlyForRoles[$getServerVar[booster];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
