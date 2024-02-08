import Affiliation from './Affiliations';
import LoadOutInventory from './LoadOutInventory';
import Mission from './Mission';
import OperatorLoadOuts from './OperatorLoadOuts';
import PlayerSkill from './PlayerSkill';
import parseDate from './utils';

export default class PlayerSummary {
  constructor(summary) {
    this.accountId = summary.AccountId.$oid;
    this.displayName = summary.DisplayName;
    this.playLevel = summary.PlayerLevel;
    this.loadout = new LoadOutInventory(summary.LoadOutInventory);
    this.playerSkills = new PlayerSkill(summary.PlayerSkills);

    // TODO: See if the nightwave challenges use the same name in worldstate-data then translate
    this.challengeProgress = summary.ChallengeProgress;
    this.guildId = summary.GuildId.$oid;
    this.guildName = summary.GuildName;
    this.guildTier = summary.GuildTier;
    this.guildXp = summary.GuildXp;
    this.guildClass = summary.GuildClass;
    this.guildEmblem = summary.GuildEmblem;
    this.allianceId = summary.AllianceId.$oid;
    this.deathMarks = summary.DeathMarks;
    this.harvestable = summary.Harvestable;

    // TODO: might be able to translate this once we update enemy data.
    this.deathSquadable = summary.DeathSquadable;
    this.created = parseDate(summary.Created);
    this.migratedToConsole = summary.MigratedToConsole;
    this.missions = summary.Missions.map((m) => new Mission(m));
    this.affiliations = summary.map((a) => new Affiliation(a));
    this.dailyAffiliation = summary.DailyAffiliation;
    this.dailyAffiliationPvp = summary.DailyAffiliationPvp;
    this.dailyAffiliationLibrary = summary.DailyAffiliationLibrary;
    this.dailyAffiliationCetus = summary.DailyAffiliationCetus;
    this.dailyAffiliationQuills = summary.DailyAffiliationQuills;
    this.dailyAffiliationSolaris = summary.DailyAffiliationSolaris;
    this.dailyAffiliationVentkids = summary.DailyAffiliationVentkids;
    this.dailyAffiliationVox = summary.DailyAffiliationVox;
    this.dailyAffiliationEntrati = summary.DailyAffiliationEntrati;
    this.dailyAffiliationNecraloid = summary.DailyAffiliationNecraloid;
    this.dailyAffiliationZariman = summary.DailyAffiliationZariman;
    this.dailyAffiliationKahl = summary.DailyAffiliationKahl;
    this.dailyAffiliationCavia = summary.DailyAffiliationCavia;
    this.dailyFocus = summary.DailyFocus;
    this.wishList = summary.Wishlist;
    this.unlockedOperator = summary.UnlockedOperator;
    this.unlockedAlignment = summary.UnlockedAlignment;
    this.operatorLoadouts = summary.OperatorLoadOuts.map((ol) => new OperatorLoadOuts(ol));
    this.alignment = { wisdom: summary.Alignment.Wisdom, alignment: summary.Alignment.Wisdom };
  }
}
