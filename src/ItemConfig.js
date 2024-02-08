import { mapColors } from './utils';

export default class ItemConfig {
  constructor(config) {
    this.skins = config.Skins;
    this.primaryColor = mapColors(config.pricol);
    this.sigilColor = mapColors(config.sigcol);
    this.pvpUpgrades = config.PvpUpgrades;
    this.attachmentsColor = mapColors(config.attcol);
    this.syandanaColor = mapColors(config.syancol);
  }
}
