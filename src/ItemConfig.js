import { colors, find } from 'warframe-items/utilities';

import mapToHex from './Util.js';

/**
 * Represents the data configuration for an item
 */
export default class ItemConfig {
  /**
   * @param {Object} config The configuration
   */
  constructor(config) {
    /**
     * Array of unique names for the skins applied to item
     * @type {Array<String>}
     */
    this.skins = config.Skins.filter(Boolean)
      .map((s) => find.findItem(s))
      .filter(Boolean);

    /**
     * Array of PVP unique name upgrades applied
     * @type {Array<String>}
     */
    if (config.PvpUpgrades) this.conclaveUpgrades = config.PvpUpgrades;

    /**
     * Primary colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap}
     */
    if (config.pricol) this.primaryColor = colors.mapColors(mapToHex(config.pricol));

    /**
     * Sigil colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap}
     */
    if (config.sigcol) this.sigilColor = colors.mapColors(mapToHex(config.sigcol));

    /**
     * Attachment colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap}
     */
    if (config.attcol) this.attachmentsColor = colors.mapColors(mapToHex(config.attcol));

    /**
     * Syandana colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap}
     */
    if (config.syancol) this.syandanaColor = colors.mapColors(mapToHex(config.syancol));
  }
}
