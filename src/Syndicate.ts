import { syndicate } from 'warframe-worldstate-data/utilities';

export interface RawAffiliation {
  Tag: string;
  Standing: number;
  Title: number;
}

/**
 * Represents a syndicate
 * @module
 */
export default class Syndicate {
  /**
   * Name of the syndicate
   */
  name: string;

  /**
   * Current standing the player has with the syndicate
   */
  standing: number;

  /**
   * The player's current syndicate title
   */
  title: number;

  /**
   * @param affiliation The syndicate data
   * @param locale  locale code
   */
  constructor(affiliation: RawAffiliation, locale = 'en') {
    this.name = syndicate(affiliation.Tag, locale);
    this.standing = affiliation.Standing;
    this.title = affiliation.Title;
  }
}
