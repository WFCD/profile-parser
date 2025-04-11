import { find } from './Utils.js';

/**
 * An item that has contributed to a player's mastery rank
 * @module
 */
export default class XpInfo {
  /**
   *
   * @param {Object} info The info for a given ranked item
   * @param {string} locale langauge to return item in
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(info, locale = 'en', withItem = false) {
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

    if (withItem) {
      /**
       * The item corrosponding to the unique name.
       * @type {module:"@wfcd/items".Item | undefined}
       */
      this.item = find(info.ItemType, locale);
    }
  }
}
