import { assert } from 'chai';
import { describe, it } from 'mocha';

import ChallengeProgress from '../../src/ChallengeProgress.js';

describe('ChallengeProgress()', () => {
  describe('#constructor', () => {
    it('handle some data', () => {
      const data = { Name: 'RadioLegionIntermission9Syndicate', Progress: 240000 };
      const challenge = new ChallengeProgress(data);

      assert.strictEqual(challenge.name, 'RadioLegionIntermission9Syndicate');
      assert.strictEqual(challenge.progress, 240000);
    });
  });
});
