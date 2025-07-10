import { Locale } from 'warframe-worldstate-data';
import { archonShardColor, archonShardUpgradeType } from 'warframe-worldstate-data/utilities';

interface RawArchonCrystal {
  Color: string;
  UpgradeType: string;
}

/**
 * Represents an Archon shard
 * @module
 */
export default class ArchonCrystal {
  color: string;
  modifier: string;

  /**
   *
   * @param crystal The archon crystal object
   * @param locale The locale to get translations in
   */
  constructor(crystal: RawArchonCrystal, locale: Locale = 'en') {
    /**
     * Archon shard color
     */
    this.color = archonShardColor(crystal.Color, locale);

    /**
     * Archon shard modifier
     */
    this.modifier = archonShardUpgradeType(crystal.Color, crystal.UpgradeType, locale);
  }
}
