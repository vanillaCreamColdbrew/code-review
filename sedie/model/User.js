class User {
  _name = ""
  _hp = 100
  att = 3
  lv = 1
  _exp = 0
  HP_MAX = 100

  constructor({ hp, att, lv, exp, HP_MAX } = {}) {
    this._hp = hp || 100
    this.att = att || 3
    this.lv = lv || 1
    this._exp = exp || 0
    this.HP_MAX = HP_MAX || 100
  }

  get isAlive() {
    return this.hp > 0
  }
  get isDead() {
    return !this.isAlive
  }

  levelUp() {
    this.lv++
    this.att += 3
    this.hp += 20
  }

  attacked(dmg) {
    this._hp -= dmg

    const attackMsg = mBuilder.attackToUser(user)
    addMessage(app, attackMsg)
  }

  // Monster
  onKillMonster(monster) {
    this.exp += monster.exp

    const monsterClearMsg = mBuilder.monsterClear(user)
    addMessage(app, monsterClearMsg)
  }

  get name() {
    return this._name
  }
  set name(newVal) {
    this._name = newVal
    const greetingMsg = mBuilder.start(this)
    addMessage(app, greetingMsg)
  }
  get hp() {
    return this._hp
  }
  set hp(newVal) {
    this._hp = Math.min(newVal, this.HP_MAX)

    if (this.isDead) {
      const gameoverMsg = mBuilder.gameover(user)
      addMessage(app, gameoverMsg)
    }
  }
  get exp() {
    return this._exp
  }
  set exp(newVal) {
    if (newVal < 100) {
      this._exp = newVal
      return
    }

    this.levelUp()
    this._exp = newVal - 100
  }
}
