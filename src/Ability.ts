
export interface RawAbility {
  type: string;
  used: number
}

/**
 * Represents a players used ability
 * @module
 */
export default class Ability {
  uniqueName: string;
  used: number;
  
  /**
   * @param ability The ability
   */
  constructor(ability: RawAbility) {
    /**
     * The ability unique name
     */
    this.uniqueName = ability.type;

    /**
     * How many time the ability was used in the player's lifetime
     */
    this.used = ability.used;
  }
}
