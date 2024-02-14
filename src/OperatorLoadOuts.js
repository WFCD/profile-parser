import { mapColors } from './utils.js';

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
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.pricol) this.primaryColor = mapColors(loadout.pricol.toString(16));

    /**
     * Operator sigil colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.sigcol) this.sigilColor = mapColors(loadout.sigcol.toString(16));

    /**
     * Operator attachment colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.attcol) this.attachmentsColor = mapColors(loadout.attcol.toString(16));

    /**
     * Operator syandana colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.syancol) this.syandanaColor = mapColors(loadout.syancol.toString(16));

    /**
     * Operator eye colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.eyecol) this.eyeColor = mapColors(loadout.eyecol.toString(16));

    /**
     * Operator facial colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.facial) this.facial = mapColors(loadout.facial.toString(16));

    /**
     * Operator cloth colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.cloth) this.cloth = mapColors(loadout.cloth.toString(16));
  }
}
