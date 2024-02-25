import { colors } from 'warframe-items/utilities';

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
    if (loadout.pricol) this.primaryColor = colors.mapColors(loadout.pricol.toString(16));

    /**
     * Operator sigil colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.sigcol) this.sigilColor = colors.mapColors(loadout.sigcol.toString(16));

    /**
     * Operator attachment colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.attcol) this.attachmentsColor = colors.mapColors(loadout.attcol.toString(16));

    /**
     * Operator syandana colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.syancol) this.syandanaColor = colors.mapColors(loadout.syancol.toString(16));

    /**
     * Operator eye colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.eyecol) this.eyeColor = colors.mapColors(loadout.eyecol.toString(16));

    /**
     * Operator facial colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.facial) this.facial = colors.mapColors(loadout.facial.toString(16));

    /**
     * Operator cloth colors
     * @type {import('./utils.js').ColorMap}
     */
    if (loadout.cloth) this.cloth = colors.mapColors(loadout.cloth.toString(16));
  }
}
