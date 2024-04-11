/** @module */

import { archonShardColor, archonShardUpgradeType } from 'warframe-worldstate-data/utilities';

export default class ArchonCrystal {
  constructor(crystal, local) {
    /**
     * Archon shard color
     * @type {String}
     */
    this.color = archonShardColor(crystal.Color, local);

    /**
     * Archon shard modifier
     * @type {String}
     */
    this.modifier = archonShardUpgradeType(crystal.Color, crystal.UpgradeType, local);
  }
}
