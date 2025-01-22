/**
 * Represents a k-drive race
 * @module
 */
export default class Race {
  /**
   *
   * @param {string} type Race name
   * @param {number} highScore high score
   */
  constructor(type, highScore) {
    /**
     * Race name
     * @type {String}
     */
    this.uniqueName = type;

    /**
     * Race High score
     * @type {number}
     */
    this.highScore = highScore;
  }

  /**
   * Created an array of Race objects from DE's Races array
   * @param {Object} races Array of races
   * @returns {Race[]} An array of races formatted in a more consumable way.
   */
  static fromRaceObject(races) {
    return Object.entries(races ?? []).map(([type, { highScore }]) => new Race(type, highScore));
  }
}
