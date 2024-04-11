import { assert } from 'chai';
import { describe, it } from 'mocha';

import Enemy from '../../src/Enemy.js';

describe('Enemy', () => {
  describe('#constructor', () => {
    it('handle enemy data', () => {
      const simpleEnemy = {
        type: '/Lotus/Powersuits/PowersuitAbilities/SlashDashNewAbility',
        kill: 1000,
        headshots: 30,
        executions: 5,
        assists: 1,
        deaths: 50,
      };

      const enemy = new Enemy(simpleEnemy);

      assert.strictEqual(enemy.uniqueName, simpleEnemy.type);
    });
  });
});
