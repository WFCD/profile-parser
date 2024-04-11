/** @module */

/**
 * Represents a players used ability
 */
export default class Ability {
  /**
   * @param {Object} ability The ability
   */
  constructor(ability) {
    /**
     * The ability unique name
     * @type {String}
     */
    this.uniqueName = ability.type;

    /**
     * How many time the ability was used in the player's lifetime
     * @type {number}
     */
    this.used = ability.used;
  }
}
