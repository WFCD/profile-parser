import { mapColors } from './utils.js';

export default class OperatorLoadOuts {
  constructor(loadout) {
    this.skins = loadout.Skins;

    this.operatorAmp = loadout.OperatorAmp.$oid;
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;

    if (loadout.pricol) this.primaryColor = mapColors(loadout.pricol.toString(16));
    if (loadout.sigcol) this.sigilColor = mapColors(loadout.sigcol.toString(16));
    if (loadout.attcol) this.attachmentsColor = mapColors(loadout.attcol.toString(16));
    if (loadout.syancol) this.syandanaColor = mapColors(loadout.syancol.toString(16));

    if (loadout.eyecol) this.eyeColor = mapColors(loadout.eyecol.toString(16));
    if (loadout.facial) this.facial = mapColors(loadout.facial.toString(16));
    if (loadout.cloth) this.cloth = mapColors(loadout.cloth.toString(16));
  }
}
