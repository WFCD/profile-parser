import ItemConfig from './ItemConfig.js';
import Polarity from './Polarity.js';
import { mapColors, parseDate } from './utils.js';

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

    if (weapon.pricol) this.primaryColor = mapColors(weapon.pricol.toString(16));
    if (weapon.sigcol) this.sigilColor = mapColors(weapon.sigcol.toString(16));
    if (weapon.attcol) this.attachmentsColor = mapColors(weapon.attcol.toString(16));
    if (weapon.syancol) this.syandanaColor = mapColors(weapon.syancol.toString(16));
    if (weapon.InfestationDate) this.infestationDate = parseDate(weapon.InfestationDate);
  }
}
