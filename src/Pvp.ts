export interface RawPvp {
  type: string;
  suitDeaths?: number;
  suitKills?: number;
  weaponKills?: number;
}

/**
 * Player's conclave stats
 * @module
 */
export default class Pvp {
  /**
   * PVP match unique name
   */
  uniqueName: string;

  /**
   * Deaths for this match
   */
  warframeDeaths?: number;

  /**
   * Warframe kills
   */
  warframeKills?: number;

  /**
   * Weapon killes
   */
  weaponKills?: number;

  /**
   *
   * @param {Object} pvp PVP data to parse
   */
  constructor(pvp: RawPvp) {
    this.uniqueName = pvp.type;
    this.warframeDeaths = pvp.suitDeaths;
    this.warframeKills = pvp.suitKills;
    this.weaponKills = pvp.weaponKills;
  }
}
