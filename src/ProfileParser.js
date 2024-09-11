import { parseDate } from 'warframe-worldstate-data/utilities';

import Profile from './Profile.js';
import Stats from './Stats.js';

/**
 * Parser entry point
 * @module
 */
export default class ProfileParser {
  /**
   *
   * @param {Object} data The data returned by getProfile endpoint
   * @param {string} locale The locale to return where possible
   */
  constructor(data, locale = 'en') {
    /**
     * Player's profile
     * @type {Profile}
     */
    this.profile = new Profile(data.Results[0], locale);

    /**
     * @type {number}
     */
    this.techProjects = data.TechProjects;

    /**
     * @type {number}
     */
    this.xpComponents = data.XpCompoents;

    /**
     * @type {number}
     */
    this.xpCacheExpiryDate = parseDate(data.XpCacheExpiryDate);

    /**
     * @type {number}
     */
    this.ceremonyResetDate = parseDate(data.CeremonyResetDate);

    /**
     * Player stats
     * @type {Stats}
     */
    this.stats = new Stats(data.Stats);
  }
}
