export default class Intrinsics {
  constructor(skills) {
    // I know this is railjack but I'm not sure what the context is
    /**
     * @type {number}
     */
    this.space = skills.LPP_SPACE;

    /**
     * Railjack engineering rank
     * @type {number}
     */
    this.engineering = skills.LPS_ENGINEERING;

    /**
     * Railjack gunnery rank
     * @type {number}
     */
    this.gunnery = skills.LPS_GUNNERY;

    /**
     * Railjack piloting rank
     * @type {number}
     */
    this.piloting = skills.LPS_PILOTING;

    /**
     * Railjack tactical rank
     * @type {number}
     */
    this.tactical = skills.LPS_TACTICAL;

    /**
     * Railjack command rank
     * @type {number}
     */
    this.command = skills.LPS_COMMAND;

    // Not sure what the context for this one is either
    /**
     * @type {number}
     */
    this.drifter = skills.LPP_DRIFTER;

    /**
     * Drifter riding rank
     * @type {number}
     */
    this.riding = skills.LPS_DRIFT_RIDING;

    /**
     * Drifter combat rank
     * @type {number}
     */
    this.combat = skills.LPS_DRIFT_COMBAT;

    /**
     * Drifter opportunity rank
     * @type {number}
     */
    this.opportunity = skills.LPS_DRIFT_OPPORTUNITY;

    /**
     * Drifter endurance rank
     * @type {number}
     */
    this.endurance = skills.LPS_DRIFT_ENDURANCE;
  }
}
