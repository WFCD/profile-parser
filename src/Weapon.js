export default class Weapon {
  constructor(weapon) {
    this.uniqueName = weapon.type;
    this.xp = weapon.xp;
    this.equiptime = weapon.equipTime;
    this.headShots = weapon.headShots;
    this.hits = weapon.hits;
    this.assists = weapon.assists;
    this.kills = weapon.kills;
    this.fired = weapon.fired;
  }
}
