
export type RawRace =  Record<string, { highScore: number }>;

/**
 * Represents a k-drive race
 * @module
 */
export default class Race {
  /**
   * Race name
   */
  uniqueName: string;
  /**
   * Race High score
   */
  highScore: number;

  /**
   *
   * @param type Race name
   * @param highScore high score
   */
  constructor(type: string, highScore: number) {
    this.uniqueName = type;
    this.highScore = highScore;
  }

  /**
   * Created an array of Race objects from DE's Races array
   * @param races Array of races
   * @returns {Race[]} An array of races formatted in a more consumable way.
   */
  static fromRaceObject(races: RawRace) {
    return Object.entries(races ?? {}).map(([type, { highScore }]) => new Race(type, highScore));
  }
}
