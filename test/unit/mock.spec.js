import { assert } from 'chai';
import { describe, it } from 'mocha';
import ProfileParser from '@wfcd/profile-parser';

import example from '../data/exampleData.json' assert { type: 'json' };

// Test the main class
describe('Mock ProfileParser', () => {
  describe('#constructor', () => {
    it('should handle real data', () => {
      assert.isOk(new ProfileParser(example, 'en'));
    });
  });
});
