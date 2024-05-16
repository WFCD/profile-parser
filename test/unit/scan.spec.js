import { assert } from 'chai';
import { describe, test } from 'mocha';

import Scan from '../../src/Scan.js';

describe('Scan', () => {
  describe('#constructor', () => {
    test('handle a tiny bit of data', () => {
      const data = {
        scans: 5,
        type: '/Lotus/Types/Enemies/GrineerChampions/GrineerChampionSniperAvatar',
      };

      const scan = new Scan(data);

      assert.strictEqual(scan.uniqueName, data.type);
      assert.strictEqual(scan.scans, data.scans);
    });
  });
});
