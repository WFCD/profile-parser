import { assert } from 'chai';
import { describe, it } from 'mocha';

import Mission from '../../src/Mission.js';

describe('Mission', () => {
  describe('#constructor', () => {
    it('handle data in profile', () => {
      const data = {
        Completes: 16,
        Tier: 1,
        Tag: 'SolNode103',
      };

      const mission = new Mission(data, 'en');

      assert.strictEqual(mission.node, 'M Prime (Mercury)');
      assert.strictEqual(mission.nodeKey, data.Tag);
      assert.strictEqual(mission.missionType, 'Extermination');
      assert.strictEqual(mission.faction, 'Crossfire');
    });
    it('handle data in stats', () => {
      const data = {
        highScore: 706,
        type: 'SolNode35',
      };

      const mission = new Mission(data);

      assert.strictEqual(mission.node, 'Arcadia (Mars)');
      assert.strictEqual(mission.nodeKey, data.type);
      assert.strictEqual(mission.missionType, 'Ancient Retribution');
      assert.strictEqual(mission.faction, 'Grineer');
      assert.strictEqual(mission.highScore, data.highScore);
    });
  });
});
