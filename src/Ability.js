export default class Ability {
  constructor(ability) {
    this.uniqueName = ability.type;
    this.used = ability.used;
  }
}
