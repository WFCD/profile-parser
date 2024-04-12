/**
 * Player completed or in progress challenges
 * @module
 */
export default class ChallengeProgress {
  constructor(challenge) {
    /**
     * Name of the challenge
     * @type {String}
     */
    this.name = challenge.Name;

    /**
     * Progress towards completing this challenge
     * @type {number}
     */
    this.progress = challenge.Progress;
  }
}
