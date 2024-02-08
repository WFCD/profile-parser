import PlayerSummary from './PlayerSummary';
import Stats from './Stats';
import parseDate from './utils';

export default class ProfileParser {
  constructor(profile) {
    this.summary = new PlayerSummary(profile.Results[0]);
    this.techProjects = profile.TechProjects;
    this.xpComponents = profile.XpCompoents;
    this.xpCacheExpiryDate = parseDate();
    this.ceremonyResetDate = profile.CeremonyResetDate;
    this.stats = new Stats(profile.Stats);
  }
}
