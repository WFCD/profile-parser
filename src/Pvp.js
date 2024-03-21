export default class Pvp {
  constructor(pvp) {
    /**
     * PVP match unique name
     * @type {String}
     */
    this.uniqueName = pvp.type;

    /**
     * Deaths for this match
     * @type {number}
     */
    this.suitDeaths = pvp.suitDeaths;

    /**
     * Warframe kills
     * @type {number}
     */
    this.suitKills = pvp.suitKills;

    /**
     * Weapon killes
     * @type {number}
     */
    this.weaponKills = pvp.weaponKills;
  }
}
