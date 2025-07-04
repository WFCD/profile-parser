import { parseDate } from 'warframe-worldstate-data/utilities';

import ChallengeProgress, { type RawChallengeProgress } from './ChallengeProgress';
import Intrinsics, { type RawIntrinsics } from './Intrinsics';
import LoadOutInventory, { type RawLoadOut } from './LoadOutInventory';
import Mission, { type RawMission } from './Mission';
import OperatorLoadOuts, { type RawOperatorLoadOuts } from './OperatorLoadOuts';
import Syndicate, { type RawAffiliation } from './Syndicate';
import LoadOutPreset, { type RawLoadOutPreset } from './LoadOutPreset';
import type { RawDate, RawId } from './Utils';

export interface RawProfile {
  AccountId: { $oid: string };
  DisplayName: string;
  PlatformNames?: string[];
  PlayerLevel: number;
  LoadOutPreset: RawLoadOutPreset;
  LoadOutInventory: RawLoadOut;
  PlayerSkills: RawIntrinsics;
  ChallengeProgress: RawChallengeProgress[];
  GuildId: RawId;
  GuildName: string;
  GuildTier: number;
  GuildXp: number;
  GuildClass: number;
  GuildEmblem: boolean;
  AllianceId?: RawId;
  DeathMarks: string[];
  Harvestable: boolean;
  DeathSquadable: boolean;
  Created: RawDate;
  MigratedToConsole: boolean;
  Missions: RawMission[];
  Affiliations: RawAffiliation[];
  DailyAffiliation: number;
  DailyAffiliationPvp?: number;
  DailyAffiliationLibrary?: number;
  DailyAffiliationCetus?: number;
  DailyAffiliationQuills?: number;
  DailyAffiliationSolaris?: number;
  DailyAffiliationVentkids?: number;
  DailyAffiliationVox?: number;
  DailyAffiliationEntrati?: number;
  DailyAffiliationNecraloid?: number;
  DailyAffiliationZariman?: number;
  DailyAffiliationKahl?: number;
  DailyAffiliationCavia?: number;
  DailyAffiliationHex?: number;
  DailyFocus?: number;
  Wishlist?: any;
  UnlockedOperator: boolean;
  UnlockedAlignment: boolean;
  OperatorLoadOuts: RawOperatorLoadOuts[];
  Alignment: { Wisdom: number; Alignment: number };
}

/**
 * A player's profile
 * @module
 */
export default class Profile {
  /**
   * Player's account ID
   */
  accountId: string;

  /**
   * In-game name
   */
  displayName: string;

  /**
   * List of usernames across supported platforms
   */
  platformNames: string[];

  /**
   * Mastery rank
   */
  masteryRank: number;

  /**
   * Load out preset equipped
   */
  preset?: LoadOutPreset;

  /**
   * Current loadout
   */
  loadout: LoadOutInventory;

  /**
   * Railjack and drifter Intrinsics
   */
  intrinsics?: Intrinsics;

  /**
   * Nightwave challenges progress
   */
  challengeProgress: ChallengeProgress[];

  /**
   * Guild ID
   */
  guildId?: string;

  /**
   * Guild name
   */
  guildName?: string;

  /**
   * Guild tier
   */
  guildTier?: number;

  /**
   * Guild XP
   */
  guildXp?: number;

  /**
   * Guild class
   */
  guildClass?: number;

  /**
   * Guild emblem.
   */
  guildEmblem: boolean;

  /**
   * Alliance ID
   */
  allianceId?: string;

  /**
   * Assassins currently asfter the player
   */
  deathMarks: string[];

  /**
   * Whether or not the player is qualified as a target for Zanuka
   * @type {boolean}
   */
  harvestable: boolean;

  /**
   * Whether or not the player is qualified as a target for a syndicate death squad
   */
  deathSquadable: boolean;

  /**
   * Date the account was created
   */
  created: Date;

  /**
   * Whether the user has migrated to console or not
   */
  migratedToConsole: boolean;

  /**
   * List of completed missions and their completions
   */
  missions: Mission[];

  /**
   * Player standing and title across all syndicates
   */
  syndicates?: Syndicate[];

  /**
   * Daily standing per Syndicate
   *
   * Faction syndicates all share daily standing
   */
  dailyStanding: {
    daily: number;
    conclave?: number;
    simaris?: number;
    ostron?: number;
    quills?: number;
    solaris?: number;
    ventKids?: number;
    voxSolaris?: number;
    entrati?: number;
    necraloid?: number;
    holdfasts?: number;
    kahl?: number;
    cavia?: number;
    hex?: number;
  };

  /**
   * Daily focus
   */
  dailyFocus?: number;

  /**
   * Player wishlist for in-game market items
   */
  wishList: any;

  /**
   * Whether the player has unlocked their operator or not
   */
  unlockedOperator: boolean;

  /**
   * Whether the player has unlocked their alignment or not
   */
  unlockedAlignment: boolean;

  /**
   * Operator loadout
   */
  operatorLoadouts?: OperatorLoadOuts[];

  /**
   * Player's alignment
   */
  alignment?: { wisdom: number; alignment: number };

  /**
   *
   * @param profile The profile data to parse
   * @param locale The locale to return in where possible
   * @param withItem Whether or not to include items
   */
  constructor(profile: RawProfile, locale: string = 'en', withItem: boolean = false) {
    this.accountId = profile.AccountId.$oid;

    this.displayName = profile.DisplayName;

    this.platformNames = profile.PlatformNames ?? [];

    this.masteryRank = profile.PlayerLevel;

    if (profile.LoadOutPreset) this.preset = new LoadOutPreset(profile.LoadOutPreset);

    this.loadout = new LoadOutInventory(profile.LoadOutInventory, locale, withItem);

    this.intrinsics = new Intrinsics(profile.PlayerSkills ?? {});

    this.challengeProgress = profile.ChallengeProgress.map((c) => new ChallengeProgress(c));

    if (profile.GuildId?.$oid) this.guildId = profile.GuildId.$oid;

    this.guildName = profile.GuildName;

    this.guildTier = profile.GuildTier;

    this.guildXp = profile.GuildXp;

    this.guildClass = profile.GuildClass;

    this.guildEmblem = profile.GuildEmblem;

    if (profile.AllianceId) this.allianceId = profile.AllianceId.$oid;

    this.deathMarks = profile.DeathMarks;

    this.harvestable = profile.Harvestable;

    this.deathSquadable = profile.DeathSquadable;

    this.created = parseDate(profile.Created);

    this.migratedToConsole = profile.MigratedToConsole;

    this.missions = profile.Missions.map((m) => new Mission(m, locale));

    this.syndicates = profile.Affiliations?.map((a) => new Syndicate(a)) ?? [];

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
      hex: profile.DailyAffiliationHex,
    };

    this.dailyFocus = profile.DailyFocus;

    this.wishList = profile.Wishlist;

    this.unlockedOperator = profile.UnlockedOperator;

    this.unlockedAlignment = profile.UnlockedAlignment;

    this.operatorLoadouts = profile.OperatorLoadOuts?.map((ol) => new OperatorLoadOuts(ol));

    if (profile.Alignment) {
      this.alignment = { wisdom: profile.Alignment?.Wisdom, alignment: profile.Alignment?.Alignment };
    }
  }
}
