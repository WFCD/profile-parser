import { assert } from 'chai';
import { describe, it } from 'mocha';

import ArchonCrystal from '../../src/ArchonCrystal.js';

describe('ArchonShard', () => {
  describe('#constructor', () => {
    it('handles some data', () => {
      const shardData = {
        Color: 'ACC_BLUE_MYTHIC',
        UpgradeType: '/Lotus/Upgrades/Invigorations/ArchonCrystalUpgrades/ArchonCrystalUpgradeWarframeArmourMaxMythic',
      };

      const shard = new ArchonCrystal(shardData);

      assert.strictEqual(shard.color, 'Tauforged Azure');
      assert.strictEqual(shard.modifier, '+225 Armor');
    });
  });
});
