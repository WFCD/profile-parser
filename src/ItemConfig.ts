import type { ColorMap } from '@wfcd/items';
import { colors } from '@wfcd/items/utilities';
import { Locale } from 'warframe-worldstate-data';

import Skin from '@/Skin';
import { mapToHex, type ProfileRawColors } from '@/Utils';

export interface RawItemConfig {
  Skins?: string[];
  PvpUpgrades?: string[];
  pricol?: ProfileRawColors;
  sigcol?: ProfileRawColors;
  attcol?: ProfileRawColors;
  syancol?: ProfileRawColors;
}

/**
 * Item customizations such as colors and applied skins
 * @module
 */
export default class ItemConfig {
  /**
   * Array of unique names for the skins applied to item
   */
  skins?: Skin[];

  /**
   * Array of PVP unique name upgrades applied
   */
  conclaveUpgrades?: string[];

  /**
   * Primary colors applied to item if they exist
   */
  primaryColor?: ColorMap;

  /**
   * Sigil colors applied to item if they exist
   */
  sigilColor?: ColorMap;

  /**
   * Attachment colors applied to item if they exist
   */
  attachmentsColor?: ColorMap;

  /**
   * Syandana colors applied to item if they exist
   */
  syandanaColor?: ColorMap;

  /**
   *
   * @param config The configuration
   */
  constructor(config: RawItemConfig, locale: Locale = 'en') {
    this.skins = config.Skins?.filter(Boolean).map(
      (s: string) => new Skin({ ItemType: s }, locale)
    );

    if (config.PvpUpgrades) this.conclaveUpgrades = config.PvpUpgrades;

    if (config.pricol)
      this.primaryColor = colors.mapColors(mapToHex(config.pricol));

    if (config.sigcol)
      this.sigilColor = colors.mapColors(mapToHex(config.sigcol));

    if (config.attcol)
      this.attachmentsColor = colors.mapColors(mapToHex(config.attcol));

    if (config.syancol)
      this.syandanaColor = colors.mapColors(mapToHex(config.syancol));
  }
}
