import LoadOutWeapon from './LoadOutWeapon';
import WeaponSkin from './WeaponSkin';
import XpInfo from './XpInfo';

export default class LoadOutInventory {
  constructor(item) {
    this.weaponSkins = item.WeaponSkins.map((s) => new WeaponSkin(s));
    this.suits = item.Suits.map((s) => LoadOutWeapon(s));
    this.pistols = item.Pistols.map((p) => LoadOutWeapon(p));
    this.longGuns = item.LongGuns.map((lg) => LoadOutWeapon(lg));
    this.melee = item.Melee.map((m) => new LoadOutWeapon(m));
    this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp));
  }
}
