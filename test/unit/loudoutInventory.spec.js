import { assert } from 'chai';
import { describe, it } from 'mocha';

import LoadOutInventory from '../../src/LoadOutInventory.js';
import data from '../data/loadoutInventory.data.js';

describe('LoudOutInventory', () => {
  describe('#contructor', () => {
    it('handle some data', () => {
      const inventory = new LoadOutInventory(data, 'en', true);

      assert.strictEqual(inventory.xpInfo[0].item.name, 'Mk1-Braton');
    });
  });
});
