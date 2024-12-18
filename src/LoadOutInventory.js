import LoadOutItem from './LoadOutItem.js';
import Skin from './Skin.js';
import XpInfo from './XpInfo.js';

/**
 * Player loudout
 * @module
 */
export default class LoadOutInventory {
  /**
   *
   * @param {Object} item The loadout data
   * @param {string} [locale='en'] The locale to return loudout items in
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(item, locale = 'en', withItem = false) {
    /**
     * Skins applied to weapons
     * @type {WeaponSkin}
     */
    this.weaponSkins = item.WeaponSkins.map((s) => new Skin(s));

    /**
     * An array of the player's currently equiped Warframe (or powersuits)
     * @type {LoadOutItem}
     */
    this.suits = item.Suits.map((s) => new LoadOutItem(s, locale));

    /**
     * An array of the player's currently equiped secondary weapon
     * @type {LoadOutItem | undefined}
     */
    this.secondary = item.Pistols?.map((p) => new LoadOutItem(p, locale));

    /**
     * An array of the player's currently equiped primary weapon
     * @type {LoadOutItem | undefined}
     */
    this.primary = item.LongGuns?.map((lg) => new LoadOutItem(lg, locale));

    /**
     * An array of the player's currently equiped melee weapon
     * @type {LoadOutItem | undefined}
     */
    this.melee = item.Melee?.map((m) => new LoadOutItem(m, locale));

    /**
     * Items that have counted towards the players mastery rank
     * @type {XpInfo}
     */
    this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp, locale, withItem));
  }
}
