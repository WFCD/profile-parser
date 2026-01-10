import { Locale } from 'warframe-worldstate-data';
import { parseDate } from 'warframe-worldstate-data/utilities';

import Profile, { type RawProfile } from './Profile';
import Stats, { type RawStats } from './Stats';
import type { RawDate } from './Utils';

interface ProfileData {
  Results: RawProfile[];
  TechProjects?: Array<object>;
  XpComponents?: Array<object>;
  XpCacheExpiryDate?: RawDate;
  CeremonyResetDate?: RawDate;
  Stats: RawStats;
}

/**
 * Parser entry point
 * @module
 */
export default class ProfileParser {
  /**
   * Player's profile
   */
  profile: Profile;

  /**
   * N/A
   */
  techProjects: Array<object>;

  /**
   * N/A
   */
  xpComponents: Array<object>;

  /**
   * N/A
   */
  xpCacheExpiryDate: Date;

  /**
   * N/A
   */
  ceremonyResetDate: Date;

  /**
   * Player stats
   */
  stats: Stats;

  /**
   *
   * @param {Object} data The data returned by getProfile endpoint
   * @param {string} locale The locale to return where possible
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(
    data: ProfileData,
    locale: Locale = 'en',
    withItem: boolean = false
  ) {
    this.profile = new Profile(data.Results[0], locale, withItem);
    this.techProjects = data.TechProjects ?? [];
    this.xpComponents = data.XpComponents ?? [];
    this.xpCacheExpiryDate = parseDate(data.XpCacheExpiryDate);
    this.ceremonyResetDate = parseDate(data.CeremonyResetDate);
    this.stats = new Stats(data.Stats);
  }
}
