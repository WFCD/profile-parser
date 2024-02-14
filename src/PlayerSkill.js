export default class PlayerSkill {
  constructor(skill) {
    // I know this is railjack but I'm not sure what the context is
    this.engineeringRank = skill.LPS_ENGINEERING;

    /**
     * Railjack gunnery rank
     * @type {number}
     */
    this.gunneryRank = skill.LPS_GUNNERY;

    /**
     * Railjack piloting rank
     * @type {number}
     */
    this.pilotingRank = skill.LPS_PILOTING;

    /**
     * Railjack tactical rank
     * @type {number}
     */
    this.tacticalRank = skill.LPS_TACTICAL;

    /**
     * Railjack command rank
     * @type {number}
     */
    this.commandRank = skill.LPS_COMMAND;

    // Not sure what the context for this one is either
    /**
     * @type {number}
     */
    this.difter = skill.LPP_DRIFTER;

    /**
     * Drifter riding rank
     * @type {number}
     */
    this.ridingRank = skill.LPS_DRIFT_RIDING;

    /**
     * Drifter combat rank
     * @type {number}
     */
    this.combatRank = skill.LPS_DRIFT_COMBAT;

    /**
     * Drifter opportunity rank
     * @type {number}
     */
    this.opportunityRank = skill.LPS_DRIFT_OPPORTUNITY;

    /**
     * Drifter endurance rank
     * @type {number}
     */
    this.enduranceRank = skill.LPS_DRIFT_ENDURANCE;
  }
}
