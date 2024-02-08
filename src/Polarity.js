import { translatePolarity } from './utils';

export default class Polarity {
  constructor(polarity) {
    this.polarity = translatePolarity(polarity.Value);
    this.slot = polarity.Slot;
  }
}
