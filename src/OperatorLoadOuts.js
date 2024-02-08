import { findItem } from './utils';

export default class OperatorLoadOuts {
  constructor(loadout) {
    this.skins = loadout.Skins.map(findItem);
    this.primaryColor = loadout.pricol;
    this.eyeColor = loadout.eyecol;
    this.facial = loadout.facial;
    this.sigilColor = loadout.sigilColor;
    this.cloth = loadout.cloth;
    this.operatorAmp = loadout.OperatorAmp.$oid;
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;
  }
}
