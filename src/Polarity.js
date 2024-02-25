import { translatePolarity } from 'warframe-worldstate-data/utilities';

export default class Polarity {
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
