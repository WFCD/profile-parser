import { find } from 'warframe-items/utilities';

export default class XpInfo {
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
     * @type {import('warframe-items').Item | undefined}
     */
    this.item = find.findItem(info.ItemType);
  }
}
