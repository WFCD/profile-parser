import { colors } from 'warframe-items/utilities';
import { parseDate, toTitleCase } from 'warframe-worldstate-data/utilities';

import ItemConfig from './ItemConfig.js';
import Polarity from './Polarity.js';
import { find } from './Utils.js';

/**
 * An an item in LoadOutInventory
 * @module
 */
export default class LoadOutItem {
  /**
   *
   * @param {Object} weapon The loadout item from LoadoutInventory
   * @param {string} [locale='en'] The locale to return item in
   */
  constructor(weapon, locale = 'en') {
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

    const item = find(weapon.ItemType, locale);
    if (item) {
      /**
       * Item in-game name
       * @type {String}
       */
      this.name = item.name;

      /**
       * Complete item from Warframe-items
       * @type {module:"warframe-items".Item}
       */
      this.item = item;
    }

    if (weapon.ItemName) {
      const [, nemesis] = weapon.ItemName.split('|');

      if (nemesis !== undefined) {
        /**
         * The name of the Lich, Sister, or Technocyte
         * @type {String}
         */
        this.nemesis = toTitleCase(nemesis);
      } else {
        this.name = weapon.ItemName;
      }
    }

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
     * @type {Array<Polarity> | undefined}
     */
    this.polarity = weapon.Polarity?.map((p) => new Polarity(p));

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
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (weapon.pricol) this.primaryColor = colors.mapColors(weapon.pricol);

    /**
     * Sigil colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (weapon.sigcol) this.sigilColor = colors.mapColors(weapon.sigcol.toString(16));

    /**
     * Whether prime details are enabled or not
     * @type {boolean}
     */
    this.enablePrime = weapon.ugly ?? false;

    /**
     * Attachment colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (weapon.attcol) this.attachmentsColor = colors.mapColors(weapon.attcol.toString(16));

    /**
     * Syandana colors applied to item if they exist
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (weapon.syancol) this.syandanaColor = colors.mapColors(weapon.syancol.toString(16));

    /**
     * If set will show when the player's warframe was infested.
     * @type {module:"warframe-items".ColorMap | undefined}
     */
    if (weapon.InfestationDate) this.infestationDate = parseDate(weapon.InfestationDate);
  }
}
