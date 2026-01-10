export interface RawChallengeProgress {
  Name: string;
  Progress: number;
}

/**
 * Player completed or in progress challenges
 * @module
 */
export default class ChallengeProgress {
  name: string;
  progress: number;

  /**
   *
   * @param challenge The challenge object to parse
   */
  constructor(challenge: RawChallengeProgress) {
    /**
     * Name of the challenge
     */
    this.name = challenge.Name;

    /**
     * Progress towards completing this challenge
     */
    this.progress = challenge.Progress;
  }
}
