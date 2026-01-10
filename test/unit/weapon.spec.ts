import { assert } from 'chai';
import { describe, test } from 'mocha';

import Weapon from '../../src/Weapon';

describe('Weapon', () => {
  describe('#constructor', () => {
    test('handle a tiny bit of data', () => {
      const data = {
        fired: 3120,
        kills: 530,
        equipTime: 14790.6066171,
        xp: 119983,
        assists: 19,
        headShots: 1,
        hits: 2000,
        type: '/Lotus/Weapons/MK1Series/MK1Bo',
      };

      const weapon = new Weapon(data);

      assert.strictEqual(weapon.uniqueName, data.type);
      assert.strictEqual(weapon.xp, data.xp);
    });
  });
});
