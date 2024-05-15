import { assert } from 'chai';
import { describe, it } from 'mocha';

import OperatorLoadOuts from '../../src/OperatorLoadOuts.js';
import data from '../data/operatorLoadout.data.js';

describe('OperatorInventory', () => {
  describe('#contructor', () => {
    it('handle some data', () => {
      const loadout = new OperatorLoadOuts(data);
      const testSkin = loadout.skins[0];

      assert.strictEqual(testSkin.uniqueName, '/Lotus/Upgrades/Skins/Operator/Heads/FemaleHeadD');
      assert.strictEqual(testSkin.item.name, 'Femaleheadd');
    });
  });
});
