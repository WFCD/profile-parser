/** @module */

import { colors } from 'warframe-items/utilities';

import mapToHex from './Util.js';

/**
 * Player's operator loadout
 */
export default class OperatorLoadOuts {
  constructor(loadout) {
    /**
     * Skins that have been applied to the player's operator.
     * @type {Array<String>}
     */
    this.skins = loadout.Skins;

    /**
     * Operator amp ID
     * @type {String}
     */
    this.operatorAmp = loadout.OperatorAmp.$oid;

    /**
     * Applied upgrade IDs
     * @type {Array<String>}
     */
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;

    /**
     * Operator primary colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.pricol) this.primaryColor = colors.mapColors(mapToHex(loadout.pricol));

    /**
     * Operator sigil colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.sigcol) this.sigilColor = colors.mapColors(mapToHex(loadout.sigcol));

    /**
     * Operator attachment colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.attcol) this.attachmentsColor = colors.mapColors(mapToHex(loadout.attcol));

    /**
     * Operator syandana colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.syancol) this.syandanaColor = colors.mapColors(mapToHex(loadout.syancol));

    /**
     * Operator eye colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.eyecol) this.eyeColor = colors.mapColors(mapToHex(loadout.eyecol));

    /**
     * Operator facial colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.facial) this.facial = colors.mapColors(mapToHex(loadout.facial));

    /**
     * Operator cloth colors
     * @type {module:"warframe-items".ColorMap}
     */
    if (loadout.cloth) this.cloth = colors.mapColors(mapToHex(loadout.cloth));
  }
}
