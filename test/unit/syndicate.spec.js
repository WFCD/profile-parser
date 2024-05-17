import { assert } from 'chai';
import { describe, test } from 'mocha';
import { syndicate } from 'warframe-worldstate-data/utilities';

import Syndicate from '../../src/Syndicate.js';

describe('Syndicate', () => {
  describe('#constructor', () => {
    test('handle a tiny bit of data', () => {
      const data = {
        Tag: 'NewLokaSyndicate',
        Standing: 141000,
        Title: 3,
      };

      const syn = new Syndicate(data);

      assert.strictEqual(syn.name, syndicate(data.Tag));
      assert.strictEqual(syn.standing, data.Standing);
      assert.strictEqual(syn.title, data.Title);
    });
  });
});
