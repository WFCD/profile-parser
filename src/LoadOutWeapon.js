import ItemConfig from './ItemConfig';
import Polarity from './Polarity';
import { parseDate } from './utils';

export default class LoadOutWeapon {
  constructor(weapon) {
    this.itemId = weapon.ItemId.$oid;
    this.uniqueName = weapon.ItemType;
    this.name = this.ItemName;
    this.configs = weapon.Configs.map((c) => new ItemConfig(c));
    this.upgradeType = weapon.UpgradeType;
    this.upgradeFingerprint = weapon.UpgradeFingerprint;
    this.features = weapon.Features;
    this.upgradeVer = weapon.UpgradeVer;
    this.xp = weapon.XP;
    this.polarized = weapon.Polarized;
    this.polarity = weapon.Polarity.map((p) => new Polarity(p));
    this.focuseLens = weapon.FocusLens;
    this.customizationSlotPurchases = weapon.CustomizationSlotPurchases;
    this.primaryColor = weapon.pricol;
    this.attachmentColor = weapon.attcol;
    this.syandanaColor = weapon.syancol;
    this.sigilColor = weapon.sigilColor;
    if (weapon.InfestationDate) this.infestationDate = parseDate(weapon.InfestationDate);
  }
}
