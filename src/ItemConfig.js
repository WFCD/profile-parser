import { mapColors } from './utils.js';

/**
 * Represents the data configureation for an item
 */
export default class ItemConfig {
  /**
   * @param {Object} config The configuration
   */
  constructor(config) {
    /**
     * Array of uniue names for the skins applied to item
     * @type {Array<String>}
     */
    this.skins = config.Skins;

    /**
     * Array of PVP unique name upgrades applied
     * @type {Array<String>}
     */
    this.conclaveUpgrades = config.PvpUpgrades;

    /**
     * Primary colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (config.pricol) this.primaryColor = mapColors(config.pricol.toString(16));

    /**
     * Sigil colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (config.sigcol) this.sigilColor = mapColors(config.sigcol.toString(16));

    /**
     * Attachment colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (config.attcol) this.attachmentsColor = mapColors(config.attcol.toString(16));

    /**
     * Syandana colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (config.syancol) this.syandanaColor = mapColors(config.syancol.toString(16));
  }
}
