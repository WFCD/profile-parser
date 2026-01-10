import { assert } from 'chai';
import { describe, test } from 'mocha';

import Pvp from '../../src/Pvp';

describe('Pvp', () => {
  describe('#contructor', () => {
    test('handle data', () => {
      const data = {
        suitKills: 20,
        suitDeaths: 54,
        weaponKills: 1,
        type: '/Lotus/Powersuits/Rhino/RhinoPrime',
      };

      const pvp = new Pvp(data);

      assert.strictEqual(pvp.warframeDeaths, data.suitDeaths);
      assert.strictEqual(pvp.warframeKills, data.suitKills);
      assert.strictEqual(pvp.uniqueName, data.type);
      assert.strictEqual(pvp.weaponKills, data.weaponKills);
    });
  });
});
