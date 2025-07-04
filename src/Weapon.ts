export interface RawWeapon {
  type: string;
  xp: number;
  equipTime: number;
  headShots: number;
  hits: number;
  assists: number;
  kills: number;
  fired: number;
}

/**
 * Represents a player's used weapon stats
 * @module
 */
export default class Weapon {
  uniqueName: string;
  xp: number;
  equiptime: number;
  headShots: number;
  hits: number;
  assists: number;
  kills: number;
  fired: number;

  /**
   *
   * @param weapon The weapon stats being parsed
   */
  constructor(weapon: RawWeapon) {
    /**
     * Weapon unique name
     * @type {String}
     */
    this.uniqueName = weapon.type;

    /**
     * Earned XP with weapon
     * @type {number}
     */
    this.xp = weapon.xp;

    /**
     * Time using this weapon
     * @type {number}
     */
    this.equiptime = weapon.equipTime;

    /**
     * Headshots using this weapon
     * @type {number}
     */
    this.headShots = weapon.headShots;

    /**
     * Hits using weapon
     * @type {number}
     */
    this.hits = weapon.hits;

    /**
     * Assists using weapon
     * @type {number}
     */
    this.assists = weapon.assists;

    /**
     * Kills with weapon
     * @type {number}
     */
    this.kills = weapon.kills;

    /**
     * Shots fired
     * @type {number}
     */
    this.fired = weapon.fired;
  }
}
