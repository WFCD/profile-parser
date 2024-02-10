import LoadOutWeapon from './LoadOutWeapon.js';
import WeaponSkin from './WeaponSkin.js';
import XpInfo from './XpInfo.js';

export default class LoadOutInventory {
  constructor(item) {
    this.weaponSkins = item.WeaponSkins.map((s) => new WeaponSkin(s));
    this.suits = item.Suits.map((s) => new LoadOutWeapon(s));
    this.pistols = item.Pistols.map((p) => new LoadOutWeapon(p));
    this.longGuns = item.LongGuns.map((lg) => new LoadOutWeapon(lg));
    this.melee = item.Melee.map((m) => new LoadOutWeapon(m));
    this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp));
  }
}
