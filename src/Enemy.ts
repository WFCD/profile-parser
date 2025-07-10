export interface RawEnemy {
  type: string;
  kills: number;
  headshots: number;
  executions: number;
  assists: number;
  deaths: number;
}

/**
 * An enemy killed/executed by player
 */
export default class Enemy {
  /**
   * Enemy's unique name
   */
  uniqueName: string;

  /**
   * How many times the player has killed this enemy type
   */
  kills: number;

  /**
   * The amount of kills that were headshots
   */
  headshots: number;

  /**
   * The amount of kills that were finishers
   */
  executions: number;

  /**
   * The amount of kills that were assits
   */
  assists: number;

  /**
   * How many times this enemy type has killed the player
   */
  deaths: number;

  /**
   * @param enemy The enemy
   */
  constructor(enemy: RawEnemy) {
    this.uniqueName = enemy.type;
    this.kills = enemy.kills;
    this.headshots = enemy.headshots;
    this.executions = enemy.executions;
    this.assists = enemy.assists;
    this.deaths = enemy.deaths;
  }
}
