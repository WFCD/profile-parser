import ProfileParser from '@wfcd/profile-parser';
import { assert } from 'chai';
import { describe, it } from 'mocha';

import example from '../data/OrnsteinTheSlayer.json' assert { type: 'json' };

// Test the main class
describe('Mock ProfileParser', () => {
  describe('#constructor', () => {
    it('should handle real data', function () {
      this.timeout(10000);

      assert.isOk(new ProfileParser(example, 'en'));
    });
  });
});
