import { colors } from '@wfcd/items/utilities';

import Skin from './Skin';
import { mapToHex, type ProfileRawColors } from './Utils';
import type { ColorMap } from '@wfcd/items';

export interface RawOperatorLoadOuts {
  Skins: string[];
  OperatorAmp?: { $oid: string };
  Upgrades: string[];
  AbilityOverride: any;
  pricol?: ProfileRawColors;
  sigcol?: ProfileRawColors;
  attcol?: ProfileRawColors;
  syancol?: ProfileRawColors;
  eyecol?: ProfileRawColors;
  facial?: ProfileRawColors;
  cloth?: ProfileRawColors;
}

/**
 * Player's operator loadout
 * @module
 */
export default class OperatorLoadOuts {
  /**
   * Skins that have been applied to the player's operator.
   */
  skins: Skin[];

  /**
   * Operator amp ID
   */
  operatorAmp?: string;

  /**
   * Applied upgrade IDs
   */
  upgrades: string[];
  abilityOverride: any;

  /**
   * Operator primary colors
   */
  primaryColor?: ColorMap;

  /**
   * Operator sigil colors
   */
  sigilColor?: ColorMap;

  /**
   * Operator attachment colors
   */
  attachmentsColor?: ColorMap;

  /**
   * Operator syandana colors
   */
  syandanaColor?: ColorMap;

  /**
   * Operator eye colors
   */
  eyeColor?: ColorMap;

  /**
   * Operator facial colors
   */
  facial?: ColorMap;

  /**
   * Operator cloth colors
   */
  cloth?: ColorMap;

  /**
   *
   * @param {Object} loadout The operator loadout
   */
  constructor(loadout: RawOperatorLoadOuts) {
    this.skins = loadout.Skins.filter(Boolean).map((s) => new Skin({ ItemType: s }));

    this.operatorAmp = loadout.OperatorAmp?.$oid;

    /**
     * Applied upgrade IDs
     * @type {Array<String>}
     */
    this.upgrades = loadout.Upgrades;
    this.abilityOverride = loadout.AbilityOverride;

    if (loadout.pricol) this.primaryColor = colors.mapColors(mapToHex(loadout.pricol));

    if (loadout.sigcol) this.sigilColor = colors.mapColors(mapToHex(loadout.sigcol));

    if (loadout.attcol) this.attachmentsColor = colors.mapColors(mapToHex(loadout.attcol));

    if (loadout.syancol) this.syandanaColor = colors.mapColors(mapToHex(loadout.syancol));

    if (loadout.eyecol) this.eyeColor = colors.mapColors(mapToHex(loadout.eyecol));

    if (loadout.facial) this.facial = colors.mapColors(mapToHex(loadout.facial));

    if (loadout.cloth) this.cloth = colors.mapColors(mapToHex(loadout.cloth));
  }
}
