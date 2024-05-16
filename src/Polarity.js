import { translatePolarity } from 'warframe-worldstate-data/utilities';

/**
 * A polarity in a LoadOutItem
 * @module
 */
export default class Polarity {
  /**
   *
   * @param {Object} polarity The polarity to parse
   */
  constructor(polarity) {
    /**
     * Polarity name
     * @type {String}
     */
    this.polarity = translatePolarity(polarity.Value);

    /**
     * Polarized slot
     * @type {number}
     */
    this.slot = polarity.Slot;
  }
}
