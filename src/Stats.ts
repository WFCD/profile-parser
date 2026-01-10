import Ability, { type RawAbility } from '@/Ability';
import Enemy, { type RawEnemy } from '@/Enemy';
import Mission, { type RawMission } from '@/Mission';
import Pvp, { type RawPvp } from '@/Pvp';
import Race, { type RawRace } from '@/Race';
import Scan, { type RawScan } from '@/Scan';
import Weapon, { type RawWeapon } from '@/Weapon';

export interface RawStats {
  GuildName: string;
  MissionsCompleted: number;
  MissionsQuit: number;
  MissionsFailed: number;
  MissionsInterrupted: number;
  MissionsDumped: number;
  PickupCount: number;
  Weapons: RawWeapon[];
  Enemies: RawEnemy[];
  ExcavationEventScoreMax?: number;
  ForestEventScoreMax?: number;
  ForestEventScoreSum?: number;
  MeleeKills: number;
  Abilities: RawAbility[];
  CiphersSolved: number;
  CiphersFailed: number;
  Income: number;
  TimePlayedSec: number;
  CipherTime: number;
  Rating: number;
  Rank: number;
  Deaths: number;
  PlayerLevel: number;
  Missions: RawMission[];
  HealCount: number;
  HiveEventScore?: number;
  HiveEventScoreSum?: number;
  InvasionEventGrineerScore?: number;
  InvasionEventCorpusScore?: number;
  Scans: RawScan[];
  ReviveCount: number;
  FomorianEventScore?: number;
  PVP?: RawPvp[];
  PVPSpeedballTies?: number;
  PVPSpeedballChecks?: number;
  PVPSpeedballGoals?: number;
  PVPSpeedballInterceptions?: number;
  PVPSpeedballSteals?: number;
  PVPSpeedballPoints?: number;
  PVPSpeedballLosses?: number;
  PVPSpeedballAssists?: number;
  PVPSpeedballWins?: number;
  PVPSpeedballSaves?: number;
  PVPSpeedballPasses?: number;
  DojoObstacleScore?: number;
  PvpGamesPendingMask?: number;
  DedicatedServerGamesCompleted?: number;
  ColonistRescueEventScoreMax?: number;
  AmbulasEventScoreMax?: number;
  SentinelGameScore?: number;
  AmalgamEventScoreMax?: number;
  FlotillaEventScore?: number;
  FlotillaGroundBadgesTier1?: number;
  FlotillaGroundBadgesTier2?: number;
  FlotillaGroundBadgesTier3?: number;
  FlotillaSpaceBadgesTier1?: number;
  FlotillaSpaceBadgesTier2?: number;
  FlotillaSpaceBadgesTier3?: number;
  MechSurvivalScoreMax: number;
  ZephyrScore?: number;
  Races: RawRace;
  PortalEventScore?: number;
  RiotMoaEventScore?: number;
  RiotMoaEventScoreMax?: number;
  ProjectSinisterEventScore?: number;
  KelaEventBonusScoreMax?: number;
  Halloween19ScoreMax?: number;
  SurvivalEventScore?: number;
  InfestedEventScore?: number;
}

interface Lunaro {
  ties: number;
  checks: number;
  goals: number;
  interceptions: number;
  steals: number;
  points: number;
  losses: number;
  assists: number;
  wins: number;
  saves: number;
  passes: number;
}

interface ScarletSpear {
  eventScore: number;
  condrixTier1: number;
  condrixTier2: number;
  condrixTier3: number;
  murexTier1: number;
  murexTier2: number;
  murexTier3: number;
}

/**
 * A player's overall career stats
 * @module
 */
export default class Stats {
  /**
   * Guild name
   */
  guildName: string;

  /**
   * Missions completed
   */
  missionsCompleted: number;

  /**
   * Missions quit
   */
  missionsQuit: number;

  /**
   * Misions failed
   */
  missionsFailed: number;

  /**
   * Missions interrupted
   */
  missionsInterrupted: number;

  /**
   * Missions dumped
   */
  missionsDumped: number;

  /**
   * Items picked up
   */
  pickupCount: number;

  /**
   * Stats per weapon
   */
  weapons: Weapon[];

  /**
   * Stats on enemy encounters.
   */
  enemies: Enemy[];

  /**
   * Max score for Operation: Cryotic Front
   */
  excavationEventScoreMax?: number;

  /**
   * Max scoring for The Cicero crisis
   */
  forestEventScoreMax?: number;

  /**
   * Clan scoring for The Cicero crisis
   */
  forestEventScoreSum?: number;

  /**
   * Melee kills
   */
  meleeKills: number;

  /**
   * Used abilities
   */
  abilities: Ability[];

  /**
   * Ciphers completed successfully
   */
  ciphersSolved: number;

  /**
   * Ciphers failed
   */
  ciphersFailed: number;

  /**
   * Gross income
   */
  income: number;

  /**
   * Total play time since account creation
   */
  timePlayedSec: number;

  /**
   * Average time to hack a panel
   */
  cipherTime: number;

  /**
   * N/A
   */
  rating: number;

  /**
   * Mastery rank
   */
  rank: number;

  /**
   * Total deaths since account creation
   */
  deaths: number;

  /**
   * Mastery rank
   */
  playerLevel: number;

  /**
   * List of missions and high scores
   */
  missions: Mission[];

  /**
   * Team heals
   */
  healCount: number;

  /**
   * Event Scores for Operation breeding grounds
   */
  breedGrounds?: { personalScore: number; clanScore: number };

  /**
   * Event Scores for The Gradivus Dilemma
   */
  gradivusDilemma?: { grineer: number; corpus: number };

  /**
   * List of scanned Warframe objects
   */
  scans: Scan[];

  /**
   * Team revives
   */
  reviveCount: number;

  /**
   * Score for Operation: Eyes of Blight
   */
  fomorianEventScore?: number;

  /**
   * Conclave scores
   */
  pvp: Pvp[];

  /**
   * Lunaro stats
   */
  lunaro: Lunaro;

  /**
   * Dojo obstacle course goal
   */
  dojoObstacleScore: number;

  /**
   * N/A
   */
  pvpGamesPendingMask: number;

  /**
   * N/A
   */
  dedicatedServerGamesCompleted: number;

  /**
   * Event score for the Pacifism Defect
   */
  pacifismDefect?: number;

  /**
   * Score for operation Ambulas reborn.
   */
  ambulasReborn?: number;

  /**
   * Score for Wyrmius mini game
   */
  sentinelGameScore?: number;

  /**
   * Event score for operation hostile merger
   */
  amalgamEventScoreMax?: number;

  /**
   * Operation Scarlet spear event score and badges
   */
  scarletSpear?: ScarletSpear;

  /**
   * Operation: Orphix Venom score
   */
  orphixVenomScore?: number;

  /**
   * Play's Highest score in Happy Zephyr
   */
  happyZephyrScore: number;

  /**
   * K-Drive races
   */
  kDriveRaces: Race[];

  /**
   * Operation Gate Crash event
   */
  gateCrash?: number;

  /**
   * Per mission score for Operation: False Profit
   */
  falseProfitMissionScore?: number;

  /**
   * Total even score for Operation: False Profit
   */
  falseProfitEventScore?: number;

  /**
   * Operation: Shadow Debt event score
   */
  shadowDebtEventScore?: number;

  /**
   * Operation: Rathuum event score
   */
  rathuumEventScore?: number;

  /**
   * Hollowed flame event max score
   */
  hallowedFlameScoreMax?: number;

  /**
   * Survival Weekend event score
   */
  survivalWeekenedEventScore?: number;

  /**
   * N/A
   */
  infestedEventScore?: number;

  /**
   *
   * @param stats Player stats
   */
  constructor(stats: RawStats) {
    this.guildName = stats.GuildName;

    this.missionsCompleted = stats.MissionsCompleted;

    this.missionsQuit = stats.MissionsQuit;

    this.missionsFailed = stats.MissionsFailed;

    this.missionsInterrupted = stats.MissionsInterrupted;

    this.missionsDumped = stats.MissionsDumped;

    this.pickupCount = stats.PickupCount;

    this.weapons = stats.Weapons.map((w) => new Weapon(w));

    this.enemies = stats.Enemies.map((e) => new Enemy(e));

    if (stats.ExcavationEventScoreMax)
      this.excavationEventScoreMax = stats.ExcavationEventScoreMax;

    if (stats.ForestEventScoreMax)
      this.forestEventScoreMax = stats.ForestEventScoreMax;

    if (stats.ForestEventScoreSum)
      this.forestEventScoreSum = stats.ForestEventScoreSum;

    this.meleeKills = stats.MeleeKills;

    this.abilities = stats.Abilities.map((a) => new Ability(a));

    this.ciphersSolved = stats.CiphersSolved;

    this.ciphersFailed = stats.CiphersFailed;

    this.income = stats.Income;

    this.timePlayedSec = stats.TimePlayedSec;

    this.cipherTime = stats.CipherTime;

    this.rating = stats.Rating;

    this.rank = stats.Rank;

    this.deaths = stats.Deaths;

    this.playerLevel = stats.PlayerLevel;

    this.missions = stats.Missions.map((m) => new Mission(m));

    this.healCount = stats.HealCount;

    if (stats.HiveEventScore || stats.HiveEventScoreSum) {
      this.breedGrounds = {
        personalScore: stats.HiveEventScore!,
        clanScore: stats.HiveEventScoreSum!,
      };
    }

    if (stats.InvasionEventGrineerScore || stats.InvasionEventCorpusScore) {
      this.gradivusDilemma = {
        grineer: stats.InvasionEventGrineerScore!,
        corpus: stats.InvasionEventCorpusScore!,
      };
    }

    this.scans = stats.Scans?.map((s) => new Scan(s)) ?? [];

    this.reviveCount = stats.ReviveCount;

    if (stats.FomorianEventScore)
      this.fomorianEventScore = stats.FomorianEventScore;

    this.pvp = stats.PVP?.map((pvp) => new Pvp(pvp)) ?? [];

    this.lunaro = {
      ties: stats.PVPSpeedballTies ?? 0,
      checks: stats.PVPSpeedballChecks ?? 0,
      goals: stats.PVPSpeedballGoals ?? 0,
      interceptions: stats.PVPSpeedballInterceptions ?? 0,
      steals: stats.PVPSpeedballSteals ?? 0,
      points: stats.PVPSpeedballPoints ?? 0,
      losses: stats.PVPSpeedballLosses ?? 0,
      assists: stats.PVPSpeedballAssists ?? 0,
      wins: stats.PVPSpeedballWins ?? 0,
      saves: stats.PVPSpeedballSaves ?? 0,
      passes: stats.PVPSpeedballPasses ?? 0,
    };

    this.dojoObstacleScore = stats.DojoObstacleScore ?? 0;

    this.pvpGamesPendingMask = stats.PvpGamesPendingMask ?? 0;

    this.dedicatedServerGamesCompleted =
      stats.DedicatedServerGamesCompleted ?? 0;

    if (stats.ColonistRescueEventScoreMax)
      this.pacifismDefect = stats.ColonistRescueEventScoreMax;

    if (stats.AmbulasEventScoreMax)
      this.ambulasReborn = stats.AmbulasEventScoreMax;

    if (stats.SentinelGameScore)
      this.sentinelGameScore = stats.SentinelGameScore;

    if (stats.AmalgamEventScoreMax)
      this.amalgamEventScoreMax = stats.AmalgamEventScoreMax;

    if (stats.FlotillaEventScore) {
      this.scarletSpear = {
        eventScore: stats.FlotillaEventScore,
        condrixTier1: stats.FlotillaGroundBadgesTier1!,
        condrixTier2: stats.FlotillaGroundBadgesTier2!,
        condrixTier3: stats.FlotillaGroundBadgesTier3!,
        murexTier1: stats.FlotillaSpaceBadgesTier1!,
        murexTier2: stats.FlotillaSpaceBadgesTier2!,
        murexTier3: stats.FlotillaSpaceBadgesTier3!,
      };
    }

    if (stats.MechSurvivalScoreMax)
      this.orphixVenomScore = stats.MechSurvivalScoreMax;

    this.happyZephyrScore = stats.ZephyrScore ?? 0;

    this.kDriveRaces = Race.fromRaceObject(stats.Races);

    if (stats.PortalEventScore) this.gateCrash = stats.PortalEventScore;

    if (stats.RiotMoaEventScore)
      this.falseProfitMissionScore = stats.RiotMoaEventScore;

    if (stats.RiotMoaEventScoreMax)
      this.falseProfitEventScore = stats.RiotMoaEventScoreMax;

    if (stats.ProjectSinisterEventScore)
      this.shadowDebtEventScore = stats.ProjectSinisterEventScore;

    if (stats.KelaEventBonusScoreMax)
      this.rathuumEventScore = stats.KelaEventBonusScoreMax;

    if (stats.Halloween19ScoreMax)
      this.hallowedFlameScoreMax = stats.Halloween19ScoreMax;

    if (stats.SurvivalEventScore)
      this.survivalWeekenedEventScore = stats.SurvivalEventScore;

    if (stats.InfestedEventScore)
      this.infestedEventScore = stats.InfestedEventScore;
  }
}
