import { colors } from 'warframe-items/utilities';

import Skin from './Skin.js';
import { mapToHex } from './Utils.js';

/**
 * Player's operator loadout
 * @module
 */
export default class OperatorLoadOuts {
  /**
   *
   * @param {Object} loadout The operator loadout
   */
  constructor(loadout) {
    /**
     * Skins that have been applied to the player's operator.
     * @type {Array<Skin>}
     */
    this.skins = loadout.Skins.filter(Boolean).map((s) => new Skin({ ItemType: s }));

    /**
     * Operator amp ID
     * @type {String | undefined}
     */
    this.operatorAmp = loadout.OperatorAmp?.$oid;

    /**
     * Applied upgrade IDs
     * @type {Array<String>}
     */
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;

    /**
     * Operator primary colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.pricol) this.primaryColor = colors.mapColors(mapToHex(loadout.pricol));

    /**
     * Operator sigil colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.sigcol) this.sigilColor = colors.mapColors(mapToHex(loadout.sigcol));

    /**
     * Operator attachment colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.attcol) this.attachmentsColor = colors.mapColors(mapToHex(loadout.attcol));

    /**
     * Operator syandana colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.syancol) this.syandanaColor = colors.mapColors(mapToHex(loadout.syancol));

    /**
     * Operator eye colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.eyecol) this.eyeColor = colors.mapColors(mapToHex(loadout.eyecol));

    /**
     * Operator facial colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.facial) this.facial = colors.mapColors(mapToHex(loadout.facial));

    /**
     * Operator cloth colors
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (loadout.cloth) this.cloth = colors.mapColors(mapToHex(loadout.cloth));
  }
}
