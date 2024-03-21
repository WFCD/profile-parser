import { assert } from 'chai';
import { describe, it } from 'mocha';

import Ability from '../../src/Ability.js';

describe('Ability', () => {
  describe('#constructor', () => {
    it('handles some data', () => {
      const simpleAbility = {
        type: '/Lotus/Powersuits/PowersuitAbilities/SlashDashNewAbility',
        used: 1000,
      };

      const ability = new Ability(simpleAbility);

      assert.strictEqual(ability.uniqueName, simpleAbility.type);
    });
  });
});
