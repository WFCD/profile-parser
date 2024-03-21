import { node, nodeEnemy, nodeMissionType } from 'warframe-worldstate-data/utilities';

export default class Mission {
  constructor(mission, locale) {
    const uniqueName = mission.Type || mission.Tag;

    /**
     * Node name
     * @type {String}
     */
    this.node = node(uniqueName, locale);

    /**
     * Node mission type
     * @type {String}
     */
    this.misstionType = nodeMissionType(uniqueName, locale);

    /**
     * Node faction
     * @type {String}
     */
    this.faction = nodeEnemy(uniqueName, locale);

    /**
     * Highest score earned in this mission
     * @type {number}
     */
    if (mission.highScore) this.highScore = mission.HighScore;

    /**
     * How many times the mission was completed
     * @type {number}
     */
    if (mission.Completes) this.completes = mission.Completes;

    // Not sure.
    if (mission.Tier) this.tier = mission.Tier;
  }
}
