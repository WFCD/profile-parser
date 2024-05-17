import { assert } from 'chai';
import { describe, test } from 'mocha';

import LoadOutItem from '../../src/LoadOutItem.js';
import data from '../data/loadoutInventory.data.js';

describe('Weapon', () => {
  describe('#constructor', () => {
    test('handle a tiny bit of data', () => {
      const item = data.LongGuns.map((lg) => new LoadOutItem(lg));

      assert.strictEqual(item[0].itemId, data.LongGuns[0].ItemId.$oid);
    });
  });
});
