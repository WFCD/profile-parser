import { assert } from "chai";
import { describe, it } from "mocha";

import ItemConfig from "../../src/ItemConfig";

describe("ItemConfig", () => {
  describe("#constructor", () => {
    it("should handle creating items when parsing data", () => {
      const config = {
        Skins: [
          "/Lotus/Upgrades/Skins/Dragon/ChromaPrimeHelmet",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Dragon/ChromaNobleAnims",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Dragon/ChromaPrimeSkin",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "/Lotus/Upgrades/Skins/Armor/WarframeDefaults/EmptyCustomization",
          "",
          "",
          "",
          "",
          "/Lotus/Upgrades/Skins/Effects/Kuva/KuvaFireEphemera",
          "/Lotus/Upgrades/Skins/Voices/DefaultWarframeVoiceItem",
        ],
        pricol: {
          t0: -13881549,
          t1: -1644569,
          t2: -2544384,
          m0: -2544384,
          m1: -10126911,
          en: -2544384,
          e1: -10126911,
        },
        attcol: {
          t0: -13881549,
          t1: -1644569,
          t2: -2544384,
          t3: -2773927,
          m0: -2544384,
          m1: -11443299,
          en: -2544384,
          e1: -11443299,
        },
        syancol: {
          t0: -10461867,
          t1: -1644569,
          t2: -2228224,
          t3: -2773927,
          m0: -2544384,
          m1: -11443299,
          en: -2544384,
          e1: -11443299,
        },
      };

      const { skins, primaryColor } = new ItemConfig(config);

      assert.strictEqual(
        skins
          ?.map((s) => s.uniqueName)
          .includes("/Lotus/Upgrades/Skins/Dragon/ChromaPrimeHelmet"),
        true,
      );
      assert.exists(primaryColor);

      const primary = primaryColor.primary;
      assert.exists(primary);
      assert.strictEqual(primary.hex, "D3D0CD");
      assert.isNotEmpty(primaryColor.emissive);
    });
  });
});
