export default class Intrinsics {
  constructor(skills) {
    // I know this is railjack but I'm not sure what the context is
    this.space = skills.LPP_SPACE;

    /**
     * Railjack engineering rank
     * @type {number}
     */
    this.engineeringRank = skills.LPS_ENGINEERING;

    /**
     * Railjack gunnery rank
     * @type {number}
     */
    this.gunneryRank = skills.LPS_GUNNERY;

    /**
     * Railjack piloting rank
     * @type {number}
     */
    this.pilotingRank = skills.LPS_PILOTING;

    /**
     * Railjack tactical rank
     * @type {number}
     */
    this.tacticalRank = skills.LPS_TACTICAL;

    /**
     * Railjack command rank
     * @type {number}
     */
    this.commandRank = skills.LPS_COMMAND;

    // Not sure what the context for this one is either
    /**
     * @type {number}
     */
    this.difter = skills.LPP_DRIFTER;

    /**
     * Drifter riding rank
     * @type {number}
     */
    this.ridingRank = skills.LPS_DRIFT_RIDING;

    /**
     * Drifter combat rank
     * @type {number}
     */
    this.combatRank = skills.LPS_DRIFT_COMBAT;

    /**
     * Drifter opportunity rank
     * @type {number}
     */
    this.opportunityRank = skills.LPS_DRIFT_OPPORTUNITY;

    /**
     * Drifter endurance rank
     * @type {number}
     */
    this.enduranceRank = skills.LPS_DRIFT_ENDURANCE;
  }
}
