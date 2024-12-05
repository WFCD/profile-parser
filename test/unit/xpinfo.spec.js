import { assert } from 'chai';
import { describe, it } from 'mocha';

import XpInfo from '../../src/XpInfo.js';

describe('XpInfo', () => {
  describe('#constructor', () => {
    it('handle an item', () => {
      const data = {
        ItemType: '/Lotus/Weapons/Grineer/LongGuns/GrineerAssaultRifle/TwinGrakatas',
        XP: 785691,
      };

      const xp = new XpInfo(data, 'en', true);

      assert.strictEqual(xp.uniqueName, '/Lotus/Weapons/Grineer/LongGuns/GrineerAssaultRifle/TwinGrakatas');
      assert.strictEqual(xp.item.name, 'Twin Grakatas');
    });
  });
});
