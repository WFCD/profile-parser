/**
 * Represents the enemies killed
 */
export default class Enemy {
  /**
   * @param {Object} enemy The enemy
   */
  constructor(enemy) {
    /**
     * Enenmy's unique name
     * @type {String}
     */
    this.uniqueName = enemy.type;

    /**
     * How many times the player has killed this enemy type
     * @type {number}
     */
    this.kills = enemy.kills;

    /**
     * The amount of kills that were headshots
     * @type {number}
     */
    this.headshots = enemy.headshots;

    /**
     * The amount of kills that were finishers
     * @type {number}
     */
    this.executions = enemy.executions;

    /**
     * The amount of kills that were assits
     * @type {number}
     */
    this.assists = enemy.assists;

    /**
     * How many times tis enemy type has killed the player
     * @type {number}
     */
    this.deaths = enemy.deaths;
  }
}
