import { assert } from 'chai';
import { describe, it } from 'mocha';

import ornstein from '../data/OrnsteinTheSlayer.json';
import tobiah from '../data/Tobiah.json';
import ProfileParser from '../../src/ProfileParser';

// Test the main class
describe('Mock ProfileParser', () => {
  describe('#constructor', () => {
    it('should handle real data', function () {
      this.timeout(20000);

      assert.isOk(new ProfileParser(ornstein));
      assert.isOk(new ProfileParser(tobiah));
    });
  });
});
