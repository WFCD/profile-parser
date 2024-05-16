import { find } from 'warframe-items/utilities';

/**
 * An item that has contributed to a player's mastery rank
 * @module
 */
export default class XpInfo {
  /**
   *
   * @param {Object} info The info for a given ranked item
   */
  constructor(info) {
    /**
     * Unique name
     * @type {String}
     */
    this.uniqueName = info.ItemType;

    /**
     * XP earned
     * @type {number}
     */
    this.xp = info.XP;

    /**
     * The item corrosponding to the unique name.
     * @type {module:"warframe-items".Item | undefined}
     */
    this.item = find.findItem(info.ItemType);
  }
}
