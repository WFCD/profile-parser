import { find } from 'warframe-items/utilities';

/**
 * A skin class
 * @module
 */
export default class Skin {
  constructor(skin) {
    /**
     * Unique name
     * @type {String}
     */
    this.uniqueName = skin.ItemType;

    const item = find.findItem(skin.ItemType);
    if (item) this.item = item;
  }
}

/**
 * @deprecated Move to Skin, this is just here to not break anything for early users
 * @param {Object} skin Skin object
 * @returns {Skin} Skin object with possible item
 */
export const WeaponSkin = (skin) => new Skin(skin);
