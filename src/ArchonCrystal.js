import { archonShardColor, archonShardUpgradeType } from 'warframe-worldstate-data/utilities';

/**
 * Represents an Archon shard
 * @module
 */
export default class ArchonCrystal {
  /**
   *
   * @param {Object} crystal The archon crystal object
   * @param {string} locale The locale to get translations in
   */
  constructor(crystal, locale = 'en') {
    /**
     * Archon shard color
     * @type {String}
     */
    this.color = archonShardColor(crystal.Color, locale);

    /**
     * Archon shard modifier
     * @type {String}
     */
    this.modifier = archonShardUpgradeType(crystal.Color, crystal.UpgradeType, locale);
  }
}
