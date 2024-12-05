import { parseDate } from 'warframe-worldstate-data/utilities';

import ChallengeProgress from './ChallengeProgress.js';
import Intrinsics from './Intrinsics.js';
import LoadOutInventory from './LoadOutInventory.js';
import Mission from './Mission.js';
import OperatorLoadOuts from './OperatorLoadOuts.js';
import Syndicate from './Syndicate.js';
import LoadOutPreset from './LoadOutPreset.js';

/**
 * A player's profile
 * @module
 */
export default class Profile {
  /**
   *
   * @param {Object} profile The profile data to parse
   * @param {string} locale The locale to return in where possible
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(profile, locale = 'en', withItem = false) {
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
     * List of usernames across supported platforms
     *@type {Array<String>}
     */
    this.platformNames = profile.PlatformNames;

    /**
     * Mastery rank
     * @type {String}
     */
    this.masteryRank = profile.PlayerLevel;

    /**
     * Load out preset equiped
     * @type {LoadOutPreset}
     */
    if (profile.LoadOutPreset) this.preset = new LoadOutPreset(profile.LoadOutPreset);

    /**
     * Current loadout
     * @type {LoadOutInventory}
     */
    this.loadout = new LoadOutInventory(profile.LoadOutInventory, locale, withItem);

    /**
     * Railjack and drifter Intrinsics
     * @type {Intrinsics}
     */
    this.intrinsics = new Intrinsics(profile.PlayerSkills);

    /**
     * Nightwave challenges progress
     * @type {}
     */
    this.challengeProgress = profile.ChallengeProgress.map((c) => new ChallengeProgress(c));

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
    if (profile.AllianceId?.$oid) this.allianceId = profile.AllianceId.$oid;

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
    this.missions = profile.Missions.map((m) => new Mission(m, locale));

    /**
     * Player standing and title across all syndicates
     * @type {Array<Syndicate>}
     */
    this.syndicates = profile.Affiliations.map((a) => new Syndicate(a));

    /**
     * Daily standing per Syndicate
     *
     * Faction syndicates all share daily standing
     * @type {Map<String,number>}
     */
    this.dailyStanding = {
      daily: profile.DailyAffiliation,
      conclave: profile.DailyAffiliationPvp,
      simaris: profile.DailyAffiliationLibrary,
      ostron: profile.DailyAffiliationCetus,
      quills: profile.DailyAffiliationQuills,
      solaris: profile.DailyAffiliationSolaris,
      ventKids: profile.DailyAffiliationVentkids,
      voxSolaris: profile.DailyAffiliationVox,
      entrati: profile.DailyAffiliationEntrati,
      necraloid: profile.DailyAffiliationNecraloid,
      holdfasts: profile.DailyAffiliationZariman,
      kahl: profile.DailyAffiliationKahl,
      cavia: profile.DailyAffiliationCavia,
    };

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
     * @type {OperatorLoadOuts | undefined}
     */
    this.operatorLoadouts = profile.OperatorLoadOuts?.map((ol) => new OperatorLoadOuts(ol));

    /**
     * Player's alignment
     * @type {Map<String,number>}
     */
    this.alignment = { wisdom: profile.Alignment.Wisdom, alignment: profile.Alignment.Alignment };
  }
}
