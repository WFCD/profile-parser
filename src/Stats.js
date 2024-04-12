import Ability from './Ability.js';
import Enemy from './Enemy.js';
import Mission from './Mission.js';
import Pvp from './Pvp.js';
import Race from './Race.js';
import Scan from './Scan.js';
import Weapon from './Weapon.js';

/**
 * A player's overall career stats
 * @module
 */
export default class Stats {
  /**
   *
   * @param {Object} stats Player stats
   */
  constructor(stats) {
    /**
     * Guild name
     * @type {String}
     */
    this.guildName = stats.GuildName;

    /**
     * Player's total accumalted xp
     * @type {String}
     */
    this.xp = stats.XP;

    /**
     * Missions completed
     * @type {number}
     */
    this.missionsCompleted = stats.MissionsCompleted;

    /**
     * MIssions quit
     * @type {number}
     */
    this.missionsQuit = stats.MissionsQuit;

    /**
     * MIsions failed
     * @type {number}
     */
    this.missionsFailed = stats.missionsFailed;

    /**
     * MIssions interrupted
     * @type {number}
     */
    this.missionsInterrupted = stats.MissionsInterrupted;

    /**
     * MIssions dumped
     * @type {number}
     */
    this.missionsDumped = stats.MissionsDumped;

    /**
     * Items picked up
     * @type {number}
     */
    this.pickupCount = stats.PickupCount;

    /**
     * Stats per weapon
     * @type {Array<Weapon>}
     */
    this.weapons = stats.Weapons.map((w) => new Weapon(w));

    /**
     * Stats on enemy encounters.
     * @type {Array<Enemy>}
     */
    this.enemies = stats.Enemies.map((e) => new Enemy(e));

    /**
     * Max score for Operation: Cryotic Front
     * @type {number}
     */
    this.excavationEventScoreMax = stats.ExcavationEventScoreMax;

    /**
     * Max scoring for The Cicero crisis
     * @type {number}
     */
    this.forestEventScoreMax = stats.ForestEventScoreMax;

    /**
     * Clan scoring for The Cicero crisis
     * @type {number}
     */
    this.forestEventScoreSum = stats.ForestEventScoreSum;

    /**
     * Melee kilss
     * @type {number}
     */
    this.meleeKills = stats.MeleeKills;

    /**
     * Used abilities
     * @type {number}
     */
    this.abilities = stats.Abilities.map((a) => new Ability(a));

    /**
     * Ciphers completed succefully
     * @type {number}
     */
    this.ciphersSolved = stats.CiphersSolved;

    /**
     * Ciphers failed
     * @type {number}
     */
    this.ciphersFailed = stats.CiphersFaileds;

    /**
     * Gross income
     * @type {number}
     */
    this.income = stats.Income;

    /**
     * Total play time since account creation
     * @type {string}
     */
    this.timePlayedSec = stats.TimePlayedSec;

    /**
     * Average time to hack a panel
     * @type {number}
     */
    this.cipherTime = stats.CipherTime;

    // Not sure
    /**
     * @type {number}
     */
    this.rating = stats.Rating;

    /**
     * Mastery rank
     * @type {number}
     */
    this.rank = stats.Rank;

    /**
     * Total deaths since account creation
     * @type {number}
     */
    this.deaths = stats.Deaths;

    /**
     * Mastery rank
     * @type {number}
     */
    this.playerLevel = stats.PlayerLevel;

    /**
     * List of missions and high scores
     * @type {Array<Mission>}
     */
    this.missions = stats.Missions.map((m) => new Mission(m));

    /**
     * Team heals
     * @type {number}
     */
    this.healCount = stats.HealCount;

    /**
     * Event Scores for Operation breeding grounds
     * @type {Map<String,numbert>}
     */
    this.breedGrounds = {
      personalScore: stats.HiveEventScore,
      clanScore: stats.HiveEventScoreSum,
    };

    /**
     * Event Scores for The Gradivus Dilemma
     * @type {Map<String,numbert>}
     */
    this.gradivusDilemma = {
      grineer: stats.InvasionEventGrineerScore,
      corpus: stats.InvasionEventCorpusScore,
    };

    /**
     * List of scans
     * @type {Array<Scan>}
     */
    this.scans = stats.Scans.map((s) => new Scan(s));

    /**
     * Team revives
     * @type {number}
     */
    this.reviveCount = stats.ReviveCount;

    /**
     * Score for Operation: Eyes of Blight
     */
    this.fomorianEventScore = stats.FomorianEventScore;

    /**
     * Conclave scores
     * @type {Array<Pvp>}
     */
    this.pvp = stats.PVP.map((pvp) => new Pvp(pvp));

    /**
     * Lunaro stats
     * @type {Map<String,number>}
     */
    this.lunaro = {
      ties: stats.PVPSpeedballTies,
      checks: stats.PVPSpeedballChecks,
      goals: stats.PVPSpeedballGoals,
      interceptions: stats.PVPSpeedballInterceptions,
      steals: stats.PVPSpeedballSteals,
      points: stats.PVPSpeedballPoints,
      losses: stats.PVPSpeedballLosses,
      assists: stats.PVPSpeedballAssists,
      wins: stats.PVPSpeedballWins,
      saves: stats.PVPSpeedballSaves,
      passes: stats.PVPSpeedballPasses,
    };

    /**
     * Dojo obstacle course goal
     * @type {number}
     */
    this.dojoObstacleScore = stats.DojoObstacleScore;

    /**
     * @type {number}
     */
    this.pvpGamesPendingMask = stats.PvpGamesPendingMask;

    /**
     * @type {number}
     */
    this.dedicatedServerGamesCompleted = stats.DedicatedServerGamesCompleted;

    /**
     * Event score for the Pacifism Defect
     * @type {number}
     */
    this.pacifismDefect = stats.ColonistRescueEventScoreMax;

    /**
     * Score for operation Ambulas reborn.
     * @type {number}
     */
    this.ambulasReborn = stats.AmbulasEventScoreMax;

    /**
     * Score for Wyrmius mini game
     * @type {number}
     */
    this.sentinelGameScore = stats.SentinelGameScore;

    /**
     * Event score for operation hostile merger
     * @type {number}
     */
    this.amalgamEventScoreMax = stats.AmalgamEventScoreMax;

    /**
     * Operation Scarlet spear event score and badges
     * @type {Map<String,number>}
     */
    this.scarletSpear = {
      eventScore: stats.FlotillaEventScore,
      condrixTier1: stats.FlotillaGroundBadgesTier1,
      condrixTier2: stats.FlotillaGroundBadgesTier2,
      condrixTier3: stats.FlotillaGroundBadgesTier3,
      murexTier1: stats.FlotillaSpaceBadgesTier1,
      murexTier2: stats.FlotillaSpaceBadgesTier2,
      murexTier3: stats.FlotillaSpaceBadgesTier3,
    };

    this.orphixVenomScore = stats.MechSurvivalScoreMax;
    this.happyZephyrScore = stats.ZephyrScore;

    this.kDriveRaces = Object.entries(stats.Races).map(([type, { highScore }]) => new Race({ type, highScore }));

    /**
     * Operation Gate Crash event
     * @type {number}
     */
    this.gateCrash = stats.PortalEventScore;

    /**
     * Per mission score for Operation: False Profit
     * @type {number}
     */
    this.falseProfitMissionScore = stats.RiotMoaEventScore;

    /**
     * Total even score for Operation: False Profit
     * @type {number}
     */
    this.fasleProfitEventScore = stats.RiotMoaEventScoreMax;

    /**
     * Operation: Shadow Debt event score
     * @type {number}
     */
    this.shadowDebtEventScore = stats.ProjectSinisterEventScore;

    /**
     * Operation: Rathuum event score
     * @type {number}
     */
    this.rathuumEventScore = stats.KelaEventBonusScoreMax;

    /**
     * Hollowed flame event max score
     * @type {number}
     */
    this.hallowedFlameScoreMax = stats.Halloween19ScoreMax;

    /**
     * Survival Weekend event score
     * @type {number}
     */
    this.survivalWeekenedEventScore = stats.SurvivalEventScore;

    /**
     * @type {number}
     */
    this.infestedEventScore = stats.InfestedEventScore;
  }
}
