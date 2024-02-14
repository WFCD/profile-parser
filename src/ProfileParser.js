import Profile from './PlayerSummary.js';
import Stats from './Stats.js';
import { parseDate } from './utils.js';

export default class ProfileParser {
  constructor(data) {
    /**
     * Player's profile
     * @type {Profile}
     */
    this.profile = new Profile(data.Results[0]);

    // N/A
    this.techProjects = data.TechProjects;

    // N/A
    this.xpComponents = data.XpCompoents;

    // N/A
    this.xpCacheExpiryDate = parseDate(data.XpCacheExpiryDate);

    // N/A
    this.ceremonyResetDate = data.CeremonyResetDate;

    /**
     * Player stats
     * @type {Stats}
     */
    this.stats = new Stats(data.Stats);
  }
}
