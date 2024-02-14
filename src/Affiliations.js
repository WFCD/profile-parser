/**
 * Represents a player's progress with a Syndicate
 */
export default class Affiliation {
  /**
   * @param {Object} affiliation The syndicate data
   */
  constructor(affiliation) {
    // TODO: name is readable but still might want to clean them up
    // i.e "NewLokaSyndicate" can be "New Loka"" instead

    /**
     * Name of the syndicate
     * @type {String}
     */
    this.name = affiliation.Tag;

    /**
     * Current standing the player has with the syndicate
     * @type {String}
     */
    this.standing = affiliation.Standing;

    /**
     * The player's current syndicate title
     * @type {String}
     */
    this.title = affiliation.Title;
  }
}
