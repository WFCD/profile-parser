import { parseDate } from 'warframe-worldstate-data/utilities';

import Profile from './Profile.js';
import Stats from './Stats.js';

export default class ProfileParser {
  constructor(data, locale) {
    /**
     * Player's profile
     * @type {Profile}
     */
    this.profile = new Profile(data.Results[0], locale);

    // N/A
    this.techProjects = data.TechProjects;

    // N/A
    this.xpComponents = data.XpCompoents;

    // N/A
    this.xpCacheExpiryDate = parseDate(data.XpCacheExpiryDate);

    // N/A
    this.ceremonyResetDate = parseDate(data.CeremonyResetDate);

    /**
     * Player stats
     * @type {Stats}
     */
    this.stats = new Stats(data.Stats);
  }
}
