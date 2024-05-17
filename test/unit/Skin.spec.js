import { assert } from 'chai';
import { describe, it } from 'mocha';

import Skin from '../../src/Skin.js';

describe('Skin', () => {
  describe('#constructor', () => {
    it('handles some data', () => {
      const data = [
        {
          ItemType: '/Lotus/Upgrades/Skins/Magician/LimboDeluxeHelmet',
        },
        {
          ItemType: '/Lotus/Upgrades/Skins/Magician/LimboDeluxeSkin',
        },
        {
          ItemType: '/Lotus/Upgrades/Skins/Effects/FootstepsEidolon',
        },
      ];

      const skins = data.map((d) => new Skin(d));

      for (let i = 0; i < skins.length; i += 1) {
        assert.strictEqual(skins[i].item.uniqueName, data[i].ItemType);
        assert.exists(skins[i].item.name);
      }
    });
    it('return uniqueName with no item', () => {
      const data = [
        {
          ItemType: '/Lotus/Upgrades/Skins/Magician/Limb',
        },
        {
          ItemType: '/Lotus/Upgrades/Skins/Magician/Lim',
        },
        {
          ItemType: '/Lotus/Upgrades/Skins/Effects/Foo',
        },
      ];

      const skins = data.map((d) => new Skin(d));

      for (let i = 0; i < skins.length; i += 1) {
        assert.strictEqual(skins[i].uniqueName, data[i].ItemType);
        assert.notExists(skins[i].item);
      }
    });
  });
});
