export default class Mission {
  constructor(mission) {
    /**
     * Node unique name
     * @type {String}
     */
    this.uniqueName = mission.Type || mission.Tag;

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
