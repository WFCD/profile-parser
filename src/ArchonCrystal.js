import { archonShardColor, archonShardUpgradeType } from 'warframe-worldstate-data/utilities';

export default class ArchonCrystal {
  constructor(crystal, local) {
    this.color = archonShardColor(crystal.Color, local);
    this.modifier = archonShardUpgradeType(crystal.Color, crystal.UpgradeType, local);
  }
}
