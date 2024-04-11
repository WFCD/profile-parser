import { assert } from 'chai';
import { describe, it } from 'mocha';

import ItemConfig from '../../src/ItemConfig.js';

describe('ItemConfig', () => {
  describe('#constructor', () => {
    it('should handle creating items when parsing data', () => {
      const config = {
        Skins: [
          '/Lotus/Upgrades/Skins/Berserker/ValkyrDeluxeHelmet',
          '/Lotus/Upgrades/Skins/Clan/ClanEmblemItem',
          '',
          '/Lotus/Upgrades/Skins/Berserker/BerserkerDeluxeNobleAnims',
          '/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization',
          '/Lotus/Upgrades/Skins/Berserker/ValkyrPrimeDangles',
          '',
          '',
          '',
          '',
        ],
        pricol: {
          t0: -2544384,
          t1: -13881549,
          t2: -2544384,
          m0: -2544384,
          m1: -11443299,
          en: -2544384,
          e1: -11443299,
        },
        sigcol: {
          t0: -2131101191,
          t1: -243302404,
          t2: -2132934656,
          en: -2130771329,
        },
        attcol: {
          t0: -2544384,
          t1: -13881549,
          t2: -2544384,
          t3: -2176318,
          m0: -2544384,
          m1: -11443299,
          en: -2544384,
          e1: -11443299,
        },
        syancol: {
          t0: -2544384,
          t1: -13881549,
          t2: -2544384,
          t3: -2176318,
          m0: -2544384,
          m1: -11443299,
          en: -2544384,
          e1: -11443299,
        },
      };

      const { skins, primaryColor } = new ItemConfig(config);

      assert.strictEqual(
        skins.map((s) => s.uniqueName).includes('/Lotus/Upgrades/Skins/Berserker/ValkyrDeluxeHelmet'),
        true
      );
      assert.strictEqual(skins.includes(undefined), false);
      assert.exists(primaryColor);
      assert.notExists(primaryColor.primaryColor);
      const primary = primaryColor.primary.toJSON();
      assert.exists(primary);
      assert.strictEqual(primary.hex, '26D300');
      assert.strictEqual(!!primary.isTransparent, false);
      assert.isNotEmpty(primaryColor.emissive);
    });
  });
});
