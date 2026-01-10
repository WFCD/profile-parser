import { assert } from "chai";
import { describe, it } from "mocha";

import LoadOutPreset from "../../src/LoadOutPreset";
import data from "../data/preset.data";

describe("LoudOutPreset", () => {
  describe("#contructor", () => {
    it("handle some data", () => {
      const preset = new LoadOutPreset(data);

      assert.strictEqual(preset.focusSchool, "Naramon");
      assert.strictEqual(preset.exaltedB.modPreset, "C");
      assert.strictEqual(preset.exaltedB.appearancePreset, "B");
    });
  });
});
