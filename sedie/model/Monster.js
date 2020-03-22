class Monster {
  name = "토끼"
  comment = "당근을 내놔랏!!"
  hp = 10
  att = 15
  exp = 35

  constructor({ name, comment, hp, att, exp } = {}) {
    this.name = name || "토끼"
    this.comment = comment || "당근을 내놔랏!!"
    this.hp = hp || 10
    this.att = att || 15
    this.exp = exp || 35
  }

  get isAlive() {
    return this.hp > 0
  }
  get isDead() {
    return !this.isAlive
  }

  attacked(dmg) {
    this._hp -= dmg

    const attackMsg = mBuilder.attackToMonster(user)
    addMessage(app, attackMsg)
  }
}
