import find from './Utils.js';

/**
 * An item that has contributed to a player's mastery rank
 * @module
 */
export default class XpInfo {
  /**
   *
   * @param {Object} info The info for a given ranked item
   * @param {string} locale langauge to return item in
   */
  constructor(info, locale = 'en') {
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
    this.item = find(info.ItemType, locale);
  }
}
