import { find } from 'warframe-items/utilities';

/**
 * A weapon skin
 * @module
 */
export default class WeaponSkin {
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
