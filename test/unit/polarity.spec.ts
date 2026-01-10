import { assert } from 'chai';
import { describe, test } from 'mocha';

import Polarity from '@/Polarity';

describe('Polarity', () => {
  describe('#contructor', () => {
    test('handle some test', () => {
      const data = {
        Value: 'AP_UMBRA',
        Slot: 2,
      };

      const polarity = new Polarity(data);

      assert.strictEqual(polarity.polarity, 'Umbra');
      assert.strictEqual(polarity.slot, 2);
    });
  });
});
