import { mapColors } from './utils.js';

export default class ItemConfig {
  constructor(config) {
    this.skins = config.Skins;
    this.pvpUpgrades = config.PvpUpgrades;

    if (config.pricol) this.primaryColor = mapColors(config.pricol.toString(16));
    if (config.sigcol) this.sigilColor = mapColors(config.sigcol.toString(16));
    if (config.attcol) this.attachmentsColor = mapColors(config.attcol.toString(16));
    if (config.syancol) this.syandanaColor = mapColors(config.syancol.toString(16));
  }
}
