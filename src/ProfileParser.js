/** @module */

import { parseDate } from 'warframe-worldstate-data/utilities';

import Profile from './Profile.js';
import Stats from './Stats.js';

/**
 * Parser entry point
 */
export default class ProfileParser {
  constructor(data, locale) {
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
