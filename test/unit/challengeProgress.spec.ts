import { assert } from 'chai';
import { describe, it } from 'mocha';

import ChallengeProgress from '../../src/ChallengeProgress';

describe('ChallengeProgress', () => {
  describe('#constructor', () => {
    it('handles some data', () => {
      const challenge = {
        Name: 'Play100Hours',
        Progress: 50,
      };

      const progress = new ChallengeProgress(challenge);

      assert.equal(progress.name, challenge.Name);
    });
  });
});
