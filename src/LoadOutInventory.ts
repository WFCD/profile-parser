import LoadOutItem, { type RawLoadOutItem } from './LoadOutItem';
import Skin, { type RawSkin } from './Skin';
import XpInfo, { type RawXpItem } from './XpInfo';

export interface RawLoadOut {
  WeaponSkins: RawSkin[];
  Suits: RawLoadOutItem[];
  Pistols?: RawLoadOutItem[];
  LongGuns?: RawLoadOutItem[];
  Melee?: RawLoadOutItem[];
  XPInfo: RawXpItem[];
}

/**
 * Player loudout
 * @module
 */
export default class LoadOutInventory {
  /**
   * Skins applied to weapons
   */
  weaponSkins: Skin[];

  /**
   * An array of the player's currently equiped Warframe (or powersuits)
   */
  suits: LoadOutItem[];

  /**
   * An array of the player's currently equiped secondary weapon
   */
  secondary?: LoadOutItem[];

  /**
   * An array of the player's currently equiped primary weapon
   */
  primary?: LoadOutItem[];

  /**
   * An array of the player's currently equiped melee weapon
   */
  melee?: LoadOutItem[];

  /**
   * Items that have counted towards the players mastery rank
   */
  xpInfo: XpInfo[];

  /**
   *
   * @param {Object} item The loadout data
   * @param {string} [locale='en'] The locale to return loudout items in
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(item: RawLoadOut, locale = 'en', withItem = false) {
    this.weaponSkins = item.WeaponSkins.map((s) => new Skin(s));

    this.suits = item.Suits.map((s) => new LoadOutItem(s, locale));

    this.secondary = item.Pistols?.map((p) => new LoadOutItem(p, locale));

    this.primary = item.LongGuns?.map((lg) => new LoadOutItem(lg, locale));

    this.melee = item.Melee?.map((m) => new LoadOutItem(m, locale));

    this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp, locale, withItem));
  }
}
