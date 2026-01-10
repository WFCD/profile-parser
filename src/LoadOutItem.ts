import type { ColorMap, Item, RawColors } from "@wfcd/items";
import { colors } from "@wfcd/items/utilities";
import { Locale } from "warframe-worldstate-data";
import { parseDate, toTitleCase } from "warframe-worldstate-data/utilities";

import ItemConfig, { type RawItemConfig } from "./ItemConfig";
import Polarity, { type RawPolarity } from "./Polarity";
import { find, RawDate } from "./Utils";

export interface RawLoadOutItem {
  ItemId: { $oid: string };
  ItemType: string;
  ItemName?: string;
  Configs: RawItemConfig[];
  UpgradeType?: string;
  UpgradeFingerprint?: unknown;
  Features: number;
  UpgradeVer: number;
  XP?: number;
  Polarized?: number;
  Polarity?: RawPolarity[];
  FocusLens?: string;
  CustomizationSlotPurchases?: number;
  pricol?: RawColors;
  sigcol?: RawColors;
  ugly?: boolean;
  attcol?: RawColors;
  syancol?: RawColors;
  InfestationDate?: RawDate;
}

/**
 * An an item in LoadOutInventory
 * @module
 */
export default class LoadOutItem {
  /**
   * Item ID
   */
  itemId: string;

  /**
   * Item unique name
   */
  uniqueName: string;

  /**
   * Item in-game name
   */
  name?: string;

  /**
   * Complete item from @wfcd/items
   */
  item?: Item;

  /**
   * The name of the Lich, Sister, or Technocyte
   */
  nemesis?: string;

  /**
   * Configuration for this weapon. Such as colors and skins applied by the player
   */
  configs: ItemConfig[];

  /**
   * The upgrade that was applied to this weapon
   */
  upgradeType?: string;

  /**
   * Information on the upgradeType that was applied
   * TODO need model for for fingerprint
   */
  upgradeFingerprint: unknown;

  features: number;

  // Not sure what this is for
  upgradeVer: number;

  /**
   * XP earned with this weapon
   */
  xp?: number;

  /**
   * How many mod slots are currently polarized.
   */
  polarized?: number;

  /**
   * Which polarity types exist on the weapon
   */
  polarity?: Polarity[];

  /**
   * Focus lens applied
   */
  focuseLens?: string;

  // Not sure what this is for
  customizationSlotPurchases: number;

  /**
   * Primary colors applied to item if they exist
   */
  primaryColor?: ColorMap;

  /**
   * Sigil colors applied to item if they exist
   */
  sigilColor?: ColorMap;

  /**
   * Whether prime details are enabled or not
   */
  enablePrime: boolean;

  /**
   * Attachment colors applied to item if they exist
   */
  attachmentsColor?: ColorMap;
  /**
   * Syandana colors applied to item if they exist
   */
  syandanaColor?: ColorMap;
  /**
   * If set will show when the player's warframe was infested.
   */
  infestationDate?: Date;

  /**
   *
   * @param {Object} loadOutItem The loadout item from LoadoutInventory
   * @param {string} [locale='en'] The locale to return item in
   */
  constructor(loadOutItem: RawLoadOutItem, locale: Locale = "en") {
    this.itemId = loadOutItem.ItemId.$oid;

    this.uniqueName = loadOutItem.ItemType;

    const item = find(loadOutItem.ItemType, locale);
    if (item) {
      this.name = item.name;

      this.item = item;
    }

    if (loadOutItem.ItemName) {
      const [, nemesis] = loadOutItem.ItemName.split("|");

      if (nemesis !== undefined) {
        this.nemesis = toTitleCase(nemesis);
      } else {
        this.name = loadOutItem.ItemName;
      }
    }

    this.configs = loadOutItem.Configs.map((c) => new ItemConfig(c));

    if (loadOutItem.UpgradeType) this.upgradeType = loadOutItem.UpgradeType;

    this.upgradeFingerprint = loadOutItem.UpgradeFingerprint;

    this.features = loadOutItem.Features;

    this.upgradeVer = loadOutItem.UpgradeVer;

    this.xp = loadOutItem.XP;

    this.polarized = loadOutItem.Polarized;

    this.polarity = loadOutItem.Polarity?.map((p) => new Polarity(p));

    this.focuseLens = loadOutItem.FocusLens;

    this.customizationSlotPurchases =
      loadOutItem.CustomizationSlotPurchases ?? 0;

    if (loadOutItem.pricol)
      this.primaryColor = colors.mapColors(loadOutItem.pricol);

    if (loadOutItem.sigcol)
      this.sigilColor = colors.mapColors(loadOutItem.sigcol);

    this.enablePrime = loadOutItem.ugly ?? false;

    if (loadOutItem.attcol)
      this.attachmentsColor = colors.mapColors(loadOutItem.attcol);

    if (loadOutItem.syancol)
      this.syandanaColor = colors.mapColors(loadOutItem.syancol);

    if (loadOutItem.InfestationDate)
      this.infestationDate = parseDate(loadOutItem.InfestationDate);
  }
}
