import { translatePolarity } from 'warframe-worldstate-data/utilities';

export interface RawPolarity {
  Value: string;
  Slot: number;
}

/**
 * A polarity in a LoadOutItem
 * @module
 */
export default class Polarity {
  /**
   * Polarity name
   */
  polarity: string;

  /**
   * Polarized slot
   */
  slot: number;

  /**
   *
   * @param {Object} raw The polarity to parse
   */
  constructor(raw: RawPolarity) {
    this.polarity = translatePolarity(raw.Value);
    this.slot = raw.Slot;
  }
}
