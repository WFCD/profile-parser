import { assert } from 'chai';
import { describe, it } from 'mocha';

import ProfileParser from '../../src/ProfileParser';
import ornstein from '../data/OrnsteinTheSlayer.json';
import tobiah from '../data/Tobiah.json';

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
