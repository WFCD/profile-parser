import { translatePolarity } from 'warframe-worldstate-data/utilities';

import { numberToLetter } from './Utils';

interface RawSlotPreset {
  ItemId?: { $oid: string };
  mod?: number;
  cus?: number;
  hide?: boolean;
}

export interface RawLoadOutPreset {
  FocusSchool: string;
  PresetIcon: string;
  Favorite: boolean;
  n: string;
  s: RawSlotPreset;
  l?: RawSlotPreset;
  p?: RawSlotPreset;
  h?: RawSlotPreset;
  m?: RawSlotPreset;
  a?: RawSlotPreset;
  b?: RawSlotPreset;
}

class SlotPreset {
  id?: string;
  modPreset?: string;
  appearancePreset?: string;
  isHidden: boolean;

  constructor(slot: RawSlotPreset) {
    if (slot?.ItemId?.$oid) this.id = slot.ItemId.$oid;

    if (slot?.mod !== undefined) this.modPreset = numberToLetter(slot.mod);

    if (slot?.cus !== undefined) this.appearancePreset = numberToLetter(slot.cus);

    this.isHidden = slot?.hide ?? false;
  }
}

export default class LoadOutPreset {
  /**
   * Focus School
   */
  focusSchool: string;
  /**
   * Preset icon
   *
   * Note:
   * Icon in-game seems to be an image of whatever Warframe is equipped on it
   */
  icon: string;
  /**
   * Whether this preset is a favorite
   */
  isFavorite: boolean;
  /**
   * Preset name
   */
  name: string;

  /**
   * Warframe equipped in preset
   */
  warframe: SlotPreset;

  /**
   * Primary equipped in preset
   */
  primary?: SlotPreset;

  /**
   * Secondary equipped in preset
   */
  secondary?: SlotPreset;

  /**
   * Heavy equipped in preset
   */
  heavy?: SlotPreset;

  /**
   * Melee equiped in preset
   */
  melee?: SlotPreset;
  /**
   * Exalted ability
   */
  exalted?: SlotPreset;
  /**
   * Secondary exalted ability
   *
   * i.e Sevagoth has his shadow and his shadow's claws both of which can be modded separately
   */
  exaltedB?: SlotPreset;

  constructor(preset: RawLoadOutPreset) {
    this.focusSchool = translatePolarity(preset.FocusSchool);

    this.icon = preset.PresetIcon;

    this.isFavorite = preset.Favorite;

    this.name = preset.n;

    this.warframe = new SlotPreset(preset.s);

    if (preset.l) this.primary = new SlotPreset(preset.l);

    if (preset.p) this.secondary = new SlotPreset(preset.p);

    if (preset.h) this.heavy = new SlotPreset(preset.h);

    if (preset.m) this.melee = new SlotPreset(preset.m);

    if (preset.a) this.exalted = new SlotPreset(preset.a);

    if (preset.b) this.exaltedB = new SlotPreset(preset.b);
  }
}
