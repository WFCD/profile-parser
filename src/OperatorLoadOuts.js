import { mapColors } from './utils';

export default class OperatorLoadOuts {
  constructor(loadout) {
    this.skins = loadout.Skins;
    this.primaryColor = mapColors(loadout.pricol);
    this.sigilColor = mapColors(loadout.sigcol);
    this.eyeColor = mapColors(loadout.eyecol);
    this.facial = mapColors(loadout.facial);
    this.sigilColor = mapColors(loadout.sigilColor);
    this.cloth = mapColors(loadout.cloth);
    this.operatorAmp = loadout.OperatorAmp.$oid;
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;
  }
}
