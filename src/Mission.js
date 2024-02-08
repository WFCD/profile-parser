export default class Mission {
  constructor(mission) {
    this.uniqueName = mission.type || mission.tag;
    // TODO: might be able to translate the node name. Some data use ClanNodes though.
    if (mission.highScore) this.highScore = mission.highScore;
    if (mission.Completes) this.completes = mission.Completes;
    if (mission.Tier) this.tier = mission.tier;
  }
}
