import { find } from './Utils.js';

/**
 * A skin class
 * @module
 */
export default class Skin {
  /**
   *
   * @param {Object} skin The skin data  to parse
   * @param {string} [locale='en'] The locale to return skin item in
   */
  constructor(skin, locale = 'en') {
    /**
     * Unique name
     * @type {String}
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
export const WeaponSkin = (skin) => new Skin(skin);
