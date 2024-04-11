import { syndicate } from 'warframe-worldstate-data/utilities';

/**
 * Represents a syndicate
 * @module
 */
export default class Syndicate {
  /**
   * @param {Object} affiliation The syndicate data
   * @param {string} locale  locale code
   */
  constructor(affiliation, locale) {
    // TODO: name is readable but still might want to clean them up
    // i.e "NewLokaSyndicate" can be "New Loka"" instead

    /**
     * Name of the syndicate
     * @type {String}
     */
    this.name = syndicate(affiliation.Tag, locale);

    /**
     * Current standing the player has with the syndicate
     * @type {number}
     */
    this.standing = affiliation.Standing;

    /**
     * The player's current syndicate title
     * @type {String}
     */
    this.title = affiliation.Title;
  }
}
