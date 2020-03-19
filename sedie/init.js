const app = document.getElementById("app")
const user = {
  _hp: 100,
  att: 3,
  lv: 1,
  _exp: 0,
  HP_MAX: 100,

  get isAlive() {
    return this.hp > 0
  },
  get isDead() {
    return !this.isAlive
  },

  levelUp() {
    this.lv++
    this.att += 3
    this.hp += 20
  },

  get hp() {
    return this._hp
  },
  set hp(newVal) {
    this._hp = Math.min(newVal, this.HP_MAX)
  },
  get exp() {
    return this._exp
  },
  set exp(newVal) {
    if (newVal < 100) {
      this._exp = newVal
      return
    }

    this.levelUp()
    this._exp = newVal - 100
  },
}
const currentMonster = {
  get isAlive() {
    return this.hp > 0
  },
  get isDead() {
    return !this.isAlive
  },
}
const monsterList = [
  {
    name: "토끼",
    comment: "당근을 내놔랏!!",
    hp: 10,
    att: 15,
    exp: 35,
  },
  {
    name: "거북이",
    comment: "왜케 느려터져써? 비켜!!",
    hp: 20,
    att: 9,
    exp: 40,
  },
  {
    name: "모기",
    comment: "피가 모자라.....위이이잉",
    hp: 6,
    att: 5,
    exp: 20,
  },
  {
    name: "개구리",
    comment: "개굴개굴!!개굴개굴!!",
    hp: 8,
    att: 8,
    exp: 30,
  },
]
let isCombatStatus = false
let loofId = null
const { addMessage } = MessageService
const mBuilder = messageBuilder

function onFightover() {
  clearInterval(loofId)
  isCombatStatus = false
}

function onGameover() {
  onFightover()

  const gameoverMsg = mBuilder.gameover(user)
  addMessage(app, gameoverMsg)
}

function attackToUser() {
  user.hp -= currentMonster.att

  // if (user.isDead) return onGameover()

  const attackMsg = mBuilder.attackToUser(user)
  addMessage(app, attackMsg)
}

function attackToMonster() {
  currentMonster.hp -= user.att

  if (currentMonster.isAlive) {
    const attackMsg = mBuilder.attackToMonster(user)
    addMessage(app, attackMsg)

    return
  }

  user.exp += currentMonster.exp
  onFightover()

  const monsterClearMsg = mBuilder.monsterClear(user)
  addMessage(app, monsterClearMsg)

  isCombatStatus = false
  adventure()
}

function adventure() {
  isCombatStatus = true
  const random = Math.floor(Math.random() * monsterList.length)
  Object.assign(currentMonster, monsterList[random])

  const newMonsterMsg = mBuilder.newMonster(currentMonster)
  addMessage(app, newMonsterMsg)

  loofId = setInterval(() => {
    if (user.isDead) return onGameover()

    if (user.isAlive && isCombatStatus) attackToMonster()
    if (currentMonster.isAlive) {
      setTimeout(() => isCombatStatus && attackToUser(), 1000)
    }
  }, 1000)
}

function getUsername() {
  return (user.name = prompt("용사님의 이름을 입력해주세요."))
}

function greeting() {
  const greetingMsg = mBuilder.start(user)
  addMessage(app, greetingMsg)
}

function init() {
  if (!user.name) {
    getUsername()
    greeting()
  }
  adventure()
}

init()
