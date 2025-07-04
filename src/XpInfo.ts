import { type Item } from '@wfcd/items';
import { find } from './Utils';

export interface RawXpItem {
  ItemType: string;
  XP: number;
}

/**
 * An item that has contributed to a player's mastery rank
 * @module
 */
export default class XpInfo {
  /**
   * Unique name
   */
  uniqueName: string;

  /**
   * XP earned
   */
  xp: number;

  /**
   * The item corrosponding to the unique name.
   */
  item?: Item;

  /**
   *
   * @param info The info for a given ranked item
   * @param locale langauge to return item in
   * @param withItem Whether or not to include items
   */
  constructor(info: RawXpItem, locale = 'en', withItem = false) {
    this.uniqueName = info.ItemType;
    this.xp = info.XP;

    if (withItem) this.item = find(info.ItemType, locale);
  }
}
