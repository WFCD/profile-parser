import { assert } from 'chai';
import { describe, it } from 'mocha';

import Intrinsics from '../../src/Intrinsics';

describe('Intrinsics', () => {
  describe('#constructor', () => {
    it('handles some skills', () => {
      const playerSkills = {
        LPP_SPACE: 125500,
        LPS_PILOTING: 10,
        LPS_ENGINEERING: 9,
        LPS_GUNNERY: 9,
        LPS_TACTICAL: 8,
        LPS_COMMAND: 8,
        LPP_DRIFTER: 182000,
        LPS_DRIFT_RIDING: 1,
      };

      const intrinsics = new Intrinsics(playerSkills);

      assert.strictEqual(intrinsics.railjack, 125);
    });
  });
});
