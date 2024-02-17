import LoadOutItem from './LoadOutItem.js';
import WeaponSkin from './WeaponSkin.js';
import XpInfo from './XpInfo.js';

export default class LoadOutInventory {
  constructor(item) {
    /**
     * Skins applied to weapons
     * @type {WeaponSkin}
     */
    this.weaponSkins = item.WeaponSkins.map((s) => new WeaponSkin(s));

    /**
     * An array of the player's currently equiped Warframe (or powersuits)
     * @type {LoadOutItem}
     */
    this.suits = item.Suits.map((s) => new LoadOutItem(s));

    /**
     * An array of the player's currently equiped secondary weapon
     * @type {LoadOutItem}
     */
    this.secondary = item.Pistols.map((p) => new LoadOutItem(p));

    /**
     * An array of the player's currently equiped primary weapon
     * @type {LoadOutItem}
     */
    this.primary = item.LongGuns.map((lg) => new LoadOutItem(lg));

    /**
     * An array of the player's currently equiped melee weapon
     * @type {LoadOutItem}
     */
    this.melee = item.Melee.map((m) => new LoadOutItem(m));

    /**
     * Items that have counted towards the players mastery rank
     * @type {XpInfo}
     */
    this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp));
  }
}
