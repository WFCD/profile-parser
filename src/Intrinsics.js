/**
 * Player's intrinsics ranks
 * @module
 */
export default class Intrinsics {
  /**
   *
   * @param {Object} skills The intrinsics object
   */
  constructor(skills) {
    /**
     * Intrinsic points for railjack
     * @type {number}
     */
    this.railjack = Math.floor((skills.LPP_SPACE ?? 0) / 1000);

    /**
     * Railjack engineering rank
     * @type {number}
     */
    this.engineering = skills.LPS_ENGINEERING ?? 0;

    /**
     * Railjack gunnery rank
     * @type {number}
     */
    this.gunnery = skills.LPS_GUNNERY ?? 0;

    /**
     * Railjack piloting rank
     * @type {number}
     */
    this.piloting = skills.LPS_PILOTING ?? 0;

    /**
     * Railjack tactical rank
     * @type {number}
     */
    this.tactical = skills.LPS_TACTICAL ?? 0;

    /**
     * Railjack command rank
     * @type {number}
     */
    this.command = skills.LPS_COMMAND ?? 0;

    /**
     * Intrinsic points for railjack
     * @type {number}
     */
    this.drifter = Math.floor((skills.LPP_DRIFTER ?? 0) / 1000);

    /**
     * Drifter riding rank
     * @type {number}
     */
    this.riding = skills.LPS_DRIFT_RIDING ?? 0;

    /**
     * Drifter combat rank
     * @type {number}
     */
    this.combat = skills.LPS_DRIFT_COMBAT ?? 0;

    /**
     * Drifter opportunity rank
     * @type {number}
     */
    this.opportunity = skills.LPS_DRIFT_OPPORTUNITY ?? 0;

    /**
     * Drifter endurance rank
     * @type {number}
     */
    this.endurance = skills.LPS_DRIFT_ENDURANCE ?? 0;
  }
}
