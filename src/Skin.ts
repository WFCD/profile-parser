import type { Item } from '@wfcd/items';
import { find } from './Utils';

export interface RawSkin {
  ItemType: string
}

/**
 * A skin class
 * @module
 */
export default class Skin {
  uniqueName: string;
  item?: Item;

  /**
   *
   * @param skin The skin data  to parse
   * @param locale The locale to return skin item in
   */
  constructor(skin: RawSkin, locale = 'en') {
    /**
     * Unique name
     */
    this.uniqueName = skin.ItemType;

    const item = find(skin.ItemType, locale);

    /**
     * The Warframe item that matches the unique name
     */
    if (item) this.item = item;
  }
}

/**
 * @deprecated Move to Skin, this is just here to not break anything for early users
 * @param {Object} skin Skin object
 * @returns {Skin} Skin object with possible item
 */
export const WeaponSkin = (skin: RawSkin) => new Skin(skin);
