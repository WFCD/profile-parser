export interface RawIntrinsics {
  LPS_ENGINEERING?: number;
  LPS_GUNNERY?: number;
  LPS_PILOTING?: number;
  LPS_TACTICAL?: number;
  LPS_COMMAND?: number;
  LPP_DRIFTER?: number;
  LPS_DRIFT_RIDING?: number;
  LPS_DRIFT_COMBAT?: number;
  LPS_DRIFT_OPPORTUNITY?: number;
  LPS_DRIFT_ENDURANCE?: number;
  LPP_SPACE?: number;
}

/**
 * Player's intrinsics ranks
 * @module
 */
export default class Intrinsics {
  /**
   * Intrinsic points for railjack
   */
  railjack: number;

  /**
   * Railjack engineering rank
   */
  engineering: number;

  /**
   * Railjack gunnery rank
   */
  gunnery: number;

  /**
   * Railjack piloting rank
   */
  piloting: number;

  /**
   * Railjack tactical rank
   */
  tactical: number;

  /**
   * Railjack command rank
   */
  command: number;

  /**
   * Intrinsic points for railjack
   */
  drifter: number;

  /**
   * Drifter riding rank
   */
  riding: number;

  /**
   * Drifter combat rank
   */
  combat: number;

  /**
   * Drifter opportunity rank
   */
  opportunity: number;

  /**
   * Drifter endurance rank
   */
  endurance: number;

  constructor(skills: RawIntrinsics) {
    this.railjack = Math.floor((skills.LPP_SPACE ?? 0) / 1000);

    this.engineering = skills.LPS_ENGINEERING ?? 0;

    this.gunnery = skills.LPS_GUNNERY ?? 0;

    this.piloting = skills.LPS_PILOTING ?? 0;

    this.tactical = skills.LPS_TACTICAL ?? 0;

    this.command = skills.LPS_COMMAND ?? 0;

    this.drifter = Math.floor((skills.LPP_DRIFTER ?? 0) / 1000);

    this.riding = skills.LPS_DRIFT_RIDING ?? 0;

    this.combat = skills.LPS_DRIFT_COMBAT ?? 0;

    this.opportunity = skills.LPS_DRIFT_OPPORTUNITY ?? 0;

    this.endurance = skills.LPS_DRIFT_ENDURANCE ?? 0;
  }
}
