/**
 * Player's conclave stats
 * @module
 */
export default class Pvp {
  /**
   *
   * @param {Object} pvp PVP data to parse
   */
  constructor(pvp) {
    /**
     * PVP match unique name
     * @type {String}
     */
    this.uniqueName = pvp.type;

    /**
     * Deaths for this match
     * @type {number | undefined}
     */
    this.suitDeaths = pvp.suitDeaths;

    /**
     * Warframe kills
     * @type {number | undefined}
     */
    this.suitKills = pvp.suitKills;

    /**
     * Weapon killes
     * @type {number | undefined}
     */
    this.weaponKills = pvp.weaponKills;
  }
}
