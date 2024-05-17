import { assert } from 'chai';
import { describe, test } from 'mocha';

import Race from '../../src/Race.js';

describe('Races', () => {
  describe('#constructor', () => {
    test('handle a little data', () => {
      const data = {
        VenusRace20: {
          highScore: 3216,
        },
        VenusRace18: {
          highScore: 5357,
        },
      };

      const races = Race.fromRaceObject(data);

      assert.strictEqual(races[0].highScore, data.VenusRace20.highScore);
    });
  });
});
