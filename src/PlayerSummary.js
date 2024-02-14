import Affiliation from './Affiliations.js';
import LoadOutInventory from './LoadOutInventory.js';
import Mission from './Mission.js';
import OperatorLoadOuts from './OperatorLoadOuts.js';
import PlayerSkill from './PlayerSkill.js';
import { parseDate } from './utils.js';

export default class Profile {
  constructor(profile) {
    /**
     * Player's acount ID
     * @type {Stirng}
     */
    this.accountId = profile.AccountId.$oid;

    /**
     * In-game name
     * @type {String}
     */
    this.displayName = profile.DisplayName;

    /**
     * Mastery rank
     * @type {String}
     */
    this.playLevel = profile.PlayerLevel;

    /**
     * Current loadout
     * @type {LoadOutInventory}
     */
    this.loadout = new LoadOutInventory(profile.LoadOutInventory);

    /**
     * Railjack and drifter Intrinsics
     * @type {PlayerSkill}
     */
    this.playerSkills = new PlayerSkill(profile.PlayerSkills);

    /**
     * Nightwave challenges progress
     * @type {}
     */
    this.challengeProgress = profile.ChallengeProgress;

    /**
     * Guild ID
     * @type {String}
     */
    this.guildId = profile.GuildId.$oid;

    /**
     * Guild name
     * @type {String}
     */
    this.guildName = profile.GuildName;

    /**
     * Guild tier
     * @type {number}
     */
    this.guildTier = profile.GuildTier;

    /**
     * Guild XP
     * @type {number}
     */
    this.guildXp = profile.GuildXp;

    /**
     * Guild class
     * @type {String}
     */
    this.guildClass = profile.GuildClass;

    /**
     * Guild emblem.
     * @type {String}
     */
    this.guildEmblem = profile.GuildEmblem;

    /**
     * Alliance ID
     * @type {String}
     */
    this.allianceId = profile.AllianceId.$oid;

    /**
     * Assassins currently asfter the player
     * @type {Array<String>}
     */
    this.deathMarks = profile.DeathMarks;

    /**
     * Whether or not the player is qualified as a target for Zanuka
     * @type {bool}
     */
    this.harvestable = profile.Harvestable;

    /**
     * Whether or not the player is qualified as a target for a syndicate death squad
     * @type {bool}
     */
    this.deathSquadable = profile.DeathSquadable;

    /**
     * Date the account was created
     * @type {Date}
     */
    this.created = parseDate(profile.Created);

    /**
     * Whether the user has migrated to console or not
     * @type {bool}
     */
    this.migratedToConsole = profile.MigratedToConsole;

    /**
     * List of completed missions and their completions
     * @type {MIssion}
     */
    this.missions = profile.Missions.map((m) => new Mission(m));

    /**
     * Player standing across all syndicates
     * @type {Array<Affiliation>}
     */
    this.affiliations = profile.Affiliations.map((a) => new Affiliation(a));

    /**
     * Daily standing
     * @type {number}
     */
    this.dailyAffiliation = profile.DailyAffiliation;

    /**
     * Daily Conclave standing
     * @type {number}
     */
    this.dailyAffiliationPvp = profile.DailyAffiliationPvp;

    /**
     * Daily Simaris standing
     * @type {number}
     */
    this.dailyAffiliationLibrary = profile.DailyAffiliationLibrary;

    /**
     * Daily Ostron standing
     * @type {number}
     */
    this.dailyAffiliationCetus = profile.DailyAffiliationCetus;

    /**
     * Daily Quill standing
     * @type {number}
     */
    this.dailyAffiliationQuills = profile.DailyAffiliationQuills;

    /**
     * Daily Solaris standing
     * @type {number}
     */
    this.dailyAffiliationSolaris = profile.DailyAffiliationSolaris;

    /**
     * Daily Vent kids standing
     * @type {number}
     */
    this.dailyAffiliationVentkids = profile.DailyAffiliationVentkids;

    /**
     * Daily Vox Solaris standing
     * @type {number}
     */
    this.dailyAffiliationVox = profile.DailyAffiliationVox;

    /**
     * Daily Entrati standing
     * @type {number}
     */
    this.dailyAffiliationEntrati = profile.DailyAffiliationEntrati;
    /**
     * Daily Necraloid standing
     * @type {number}
     */
    this.dailyAffiliationNecraloid = profile.DailyAffiliationNecraloid;

    /**
     * Daily Holdfast standing
     * @type {number}
     */
    this.dailyAffiliationZariman = profile.DailyAffiliationZariman;

    /**
     * Daily standing for Kahl's Garrison
     * @type {number}
     */
    this.dailyAffiliationKahl = profile.DailyAffiliationKahl;

    /**
     * Daily Cavia standing
     * @type {number}
     */
    this.dailyAffiliationCavia = profile.DailyAffiliationCavia;

    /**
     * Daily focus
     * @type {number}
     */
    this.dailyFocus = profile.DailyFocus;

    /**
     * Player wishlist for in-game market items
     */
    this.wishList = profile.Wishlist;

    /**
     * Whhether the player has unlocked thier operator or not
     * @type {bool}
     */
    this.unlockedOperator = profile.UnlockedOperator;

    /**
     * Whether the player has unlocked their alignement or not
     * @type {bool}
     */
    this.unlockedAlignment = profile.UnlockedAlignment;

    /**
     * Operator loadout
     * @type {OperatorLoadOuts}
     */
    this.operatorLoadouts = profile.OperatorLoadOuts.map((ol) => new OperatorLoadOuts(ol));

    /**
     * Player's alignment
     * @type {Map<String,number>}
     */
    this.alignment = { wisdom: profile.Alignment.Wisdom, alignment: profile.Alignment.Alignment };
  }
}
