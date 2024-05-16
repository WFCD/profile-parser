import { node, nodeEnemy, nodeMissionType } from 'warframe-worldstate-data/utilities';

/**
 * A mission completed by the player
 * @module
 */
export default class Mission {
  /**
   *
   * @param {Object} mission The mission data
   * @param {string} locale The locale to return in
   */
  constructor(mission, locale) {
    const uniqueName = mission.type || mission.Tag;

    /**
     * Node name
     * @type {String}
     */
    this.node = node(uniqueName, locale);

    /**
     * Node mission type
     * @type {String}
     */
    this.missionType = nodeMissionType(uniqueName, locale);

    /**
     * Node faction
     * @type {String}
     */
    this.faction = nodeEnemy(uniqueName, locale);

    /**
     * Highest score earned in this mission
     * @type {number | undefined}
     */
    if (mission.highScore) this.highScore = mission.highScore;

    /**
     * How many times the mission was completed
     * @type {number | undefined}
     */
    if (mission.Completes) this.completes = mission.Completes;

    /**
     * Denotes a steel path node
     * @type {number | undefined}
     */
    if (mission.Tier) this.tier = mission.Tier;
  }
}
