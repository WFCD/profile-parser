import { colors, find } from 'warframe-items/utilities';
import { parseDate } from 'warframe-worldstate-data/utilities';

import ItemConfig from './ItemConfig.js';
import Polarity from './Polarity.js';

export default class LoadOutItem {
  constructor(weapon) {
    /**
     * Item ID
     * @type {String}
     */
    this.itemId = weapon.ItemId.$oid;

    /**
     * Item unique name
     * @type {String}
     */
    this.uniqueName = weapon.ItemType;

    this.name = find.findItem(weapon.ItemType);

    /**
     * Item name
     * @type {String}
     */
    this.itemName = this.ItemName;

    /**
     * Configuration for this weapon. Such as colors and skins applied by the player
     * @type {Array<ItemConfig>}
     */
    this.configs = weapon.Configs.map((c) => new ItemConfig(c));

    /**
     * The upgrade that was applied to this weapon
     * @type {String}
     */
    if (weapon.upgradeType) this.upgradeType = weapon.UpgradeType;

    /**
     * Information on the upgradeType that was applied
     * TODO need model for for fingerprint
     */
    this.upgradeFingerprint = weapon.UpgradeFingerprint;

    /**
     * @type {number}
     */
    this.features = weapon.Features;

    // Not sure what this is for
    /**
     * @type {number}
     */
    this.upgradeVer = weapon.UpgradeVer;

    /**
     * XP earned with this weapon
     * @type {number}
     */
    this.xp = weapon.XP;

    /**
     * How many mod slots are currently polarized.
     * @type {number}
     */
    this.polarized = weapon.Polarized;

    /**
     * Which polarity types exist on the weapon
     * @type {Array<Polarity>}
     */
    this.polarity = weapon.Polarity.map((p) => new Polarity(p));

    /**
     * Focus lens applied
     * @type {String}
     */
    this.focuseLens = weapon.FocusLens;

    // Not sure what this is for
    /**
     * @type {number}
     */
    this.customizationSlotPurchases = weapon.CustomizationSlotPurchases;

    /**
     * Primary colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (weapon.pricol) this.primaryColor = colors.mapColors(weapon.pricol.toString(16));

    /**
     * Sigil colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (weapon.sigcol) this.sigilColor = colors.mapColors(weapon.sigcol.toString(16));

    /**
     * Attachment colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (weapon.attcol) this.attachmentsColor = colors.mapColors(weapon.attcol.toString(16));

    /**
     * Syandana colors applied to item if they exist
     * @type {import('./utils.js').ColorMap}
     */
    if (weapon.syancol) this.syandanaColor = colors.mapColors(weapon.syancol.toString(16));

    /**
     * If set will show when the player's warframe was infested.
     * @type {import('./utils.js').ColorMap}
     */
    if (weapon.InfestationDate) this.infestationDate = parseDate(weapon.InfestationDate);
  }
}
