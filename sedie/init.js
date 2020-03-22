const app = document.getElementById("app")
const user = new User({ hp: 100, att: 3, lv: 1, exp: 0, HP_MAX: 100 })
let currentMonster = new Monster()
const { addMessage } = MessageService
const mBuilder = messageBuilder

function onFightover() {
  user.onKillMonster(currentMonster)
  adventure()
}

async function fight() {
  currentMonster.attacked(user.att)
  await delay()
  if (currentMonster.isDead) return onFightover()

  user.attacked(currentMonster.att)
  await delay()
  if (user.isDead) return

  return fight()
}

function encounterMonster() {
  const random = Math.floor(Math.random() * monsterList.length)
  currentMonster = new Monster(monsterList[random])

  const newMonsterMsg = mBuilder.newMonster(currentMonster)
  addMessage(app, newMonsterMsg)
}

async function adventure() {
  await delay()
  encounterMonster()

  await delay()
  fight()
}

function getUsername() {
  return (user.name = prompt("용사님의 이름을 입력해주세요."))
}

function init() {
  getUsername()
  adventure()
}

init()
