/* eslint-disable prettier/prettier */
import { assert } from 'chai';
import { describe, it } from 'mocha';

import ProfileParser from '../../src/ProfileParser.js';
import example from '../data/exampleData.json' with { type: 'json' };

// Test the main class
describe('Mock ProfileParser', () => {
  describe('#constructor', () => {
    it('should handle real data', () => {
      assert.isOk(new ProfileParser(example));
    });
  });
});
