import { colors } from 'warframe-items/utilities';

import Skin from './Skin.js';
import mapToHex from './Util.js';

/**
 * Item customizations such as colors and applied skins
 * @module
 */
export default class ItemConfig {
  /**
   *
   * @param {Object} config The configuration
   */
  constructor(config) {
    /**
     * Array of unique names for the skins applied to item
     * @type {Array<String>}
     */
    this.skins = config.Skins.filter(Boolean).map((s) => new Skin({ ItemType: s }));

    /**
     * Array of PVP unique name upgrades applied
     * @type {Array<String>}
     */
    if (config.PvpUpgrades) this.conclaveUpgrades = config.PvpUpgrades;

    /**
     * Primary colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (config.pricol) this.primaryColor = colors.mapColors(mapToHex(config.pricol));

    /**
     * Sigil colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (config.sigcol) this.sigilColor = colors.mapColors(mapToHex(config.sigcol));

    /**
     * Attachment colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (config.attcol) this.attachmentsColor = colors.mapColors(mapToHex(config.attcol));

    /**
     * Syandana colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (config.syancol) this.syandanaColor = colors.mapColors(mapToHex(config.syancol));
  }
}
