export default class Pvp {
  constructor(pvp) {
    this.uniqueName = pvp.type;
    this.suitDeaths = pvp.suitDeaths;
    this.suitKills = pvp.suitKills;
    this.weaponKills = pvp.weaponKills;
  }
}
