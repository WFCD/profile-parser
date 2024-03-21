export default class Race {
  constructor(race) {
    /**
     * Race name
     * @type {String}
     */
    this.uniqueName = race.type;

    /**
     * Race High score
     * @type {number}
     */
    this.highScore = race.highScore;
  }
}
