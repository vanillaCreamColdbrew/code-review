const messageBuilder = {
  start() {
    return `<b>${user.name}</b>님의 모험이 시작됩니다. [레벨:${user.lv}, 체력:${user.hp}, 공격력:${user.att}, 경험치:${user.exp}]`
  },
  newMonster() {
    return `
      ${currentMonster.name}를 만났습니다! 
      ${currentMonster.name}왈, "${currentMonster.comment}" 
      ▶(${currentMonster.name} 체력:${currentMonster.hp}, 공격력:${currentMonster.att}, 경험치:${currentMonster.exp})
    `
  },
  attackToMonster() {
    return `<b>${user.name}</b>님이 공격하여 ${currentMonster.name}의 체력이 ${currentMonster.hp}가 되었습니다.`
  },
  attackToUser() {
    return `${currentMonster.name}가 공격하여 <b>${user.name}</b>님의 체력이 ${user.hp}가 되었습니다.`
  },
  gameover() {
    return `${currentMonster.name}가 공격하여 <b>${user.name}</b>님의 체력이 모두 소진되었습니다. ${currentMonster.name}한테 죽다니... 나약해....ㅜㅜ ▶[최종 레벨:${user.lv}, 경험치:${user.exp}]`
  },
  monsterClear() {
    return `<b>${user.name}</b>님이 공격하여 ${currentMonster.name}의 체력이 모두 소진되었습니다. <b>${user.name}</b>님이 승리했습니다! ▶[레벨:${user.lv}, 체력:${user.hp}, 공격력:${user.att}, 경험치:${user.exp}]`
  },
}
