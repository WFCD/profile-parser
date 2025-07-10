import { assert } from 'chai';
import { describe, it } from 'mocha';

import Stats from '../../src/Stats.js';
import ornstein from '../data/OrnsteinTheSlayer.json' with { type: 'json' };
import tobiah from '../data/Tobiah.json' with { type: 'json' };

// Test the main class
describe('Mock ProfileParser', () => {
  describe('#constructor', () => {
    it('should handle real data', function () {
      this.timeout(10000);

      assert.isOk(new Stats(ornstein.Stats));
      assert.isOk(new Stats(tobiah.Stats));
    });
  });
});
