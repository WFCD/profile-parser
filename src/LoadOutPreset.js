import { translatePolarity } from 'warframe-worldstate-data/utilities';

import { numbertoLetter } from './Utils.js';

class SlotPreset {
  constructor(slot) {
    if (slot?.ItemId.$oid) this.id = slot.ItemId.$oid;

    if (slot?.mod !== undefined) this.modPreset = numbertoLetter(slot.mod);

    if (slot?.cus !== undefined) this.apperancePreset = numbertoLetter(slot.cus);

    this.isHidden = slot?.hide ?? false;
  }
}

export default class LoadOutPreset {
  constructor(preset) {
    /**
     * Focus School
     * @type {String}
     */
    this.focusSchool = translatePolarity(preset.FocusSchool);

    /**
     * Preset icon
     *
     * Note:
     * Icon in-game seems to be an image of whatever Warframe is equipped on it
     * @type {String}
     */
    this.icon = preset.PresetIcon;

    /**
     * Whether this preset is a favorite
     * @type {boolean}
     */
    this.isFavorite = preset.Favorite;

    /**
     * Preset name
     * @type {String}
     */
    this.name = preset.n;

    /**
     * Warframe equiped in preset
     * @type {SlotPreset}
     */
    this.warframe = new SlotPreset(preset.s);

    /**
     * Primary equiped in preset
     * @type {SlotPreset}
     */
    if (preset.p) this.primary = new SlotPreset(preset.l);

    /**
     * Secondary equiped in preset
     * @type {SlotPreset}
     */
    if (preset.s) this.secondary = new SlotPreset(preset.p);

    /**
     * Heavy Weapon
     * @type {SlotPreset}
     */
    if (preset.h) this.heavy = new SlotPreset(preset.h);

    /**
     * Melee equiped in preset
     * @type {SlotPreset}
     */
    if (preset.m) this.melee = new SlotPreset(preset.m);

    /**
     * Exalted
     * @type {SlotPreset}
     */
    if (preset.a) this.exalted = new SlotPreset(preset.a);

    /**
     * Exalted B
     *
     * i.e Sevagoth has his shadow and his shadow's claws both of which can be modded separately
     * @type {SlotPreset}
     */
    if (preset.b) this.exaltedB = new SlotPreset(preset.b);
  }
}
