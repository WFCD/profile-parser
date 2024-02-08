import Ability from './Ability';
import Enemy from './Enemy';
import Mission from './Mission';
import Pvp from './Pvp';
import Race from './Race';
import Scan from './Scan';
import Weapon from './Weapon';

export default class Stats {
  constructor(stats) {
    this.guildName = stats.GuildName;
    this.xp = stats.XP;
    this.missionsCompleted = stats.MissionsCompleted;
    this.missionsQuit = stats.MissionsQuit;
    this.missionsFailed = stats.missionsFailed;
    this.missionsInterrupted = stats.MissionsInterrupted;
    this.missionsDumped = stats.MissionsDumped;
    this.pickupCount = stats.PickupCount;
    this.weapons = stats.weapons.map((w) => new Weapon(w));
    this.enemies = stats.enemies.map((e) => new Enemy(e));
    this.excavationEventScoreMax = stats.ExcavationEventScoreMax;
    this.forestEventScoreMax = stats.ForestEventScoreMax;
    this.forestEventScoreSum = stats.ForestEventScoreSum;
    this.meleeKills = stats.MeleeKills;
    this.abilities = stats.Abilities.map((a) => new Ability(a));
    this.ciphersSolved = stats.CiphersSolved;
    this.ciphersFailed = stats.CiphersFaileds;
    this.income = stats.Income;
    this.timePlayedSec = stats.TimePlayedSec;
    this.cipherTime = stats.CipherTime;
    this.rating = stats.Rating;
    this.rank = stats.Rank;
    this.deaths = stats.Deaths;
    this.playerLevel = stats.PlayerLevel;
    this.missions = stats.Missions.map((m) => new Mission(m));
    this.healCount = stats.HealCount;
    this.hiveEventScore = stats.HiveEventScore;
    this.hiveEventScoreSum = stats.HiveEventScoreSum;
    this.invasionEventGrineerScore = stats.InvasionEventGrineerScore;
    this.scans = stats.Scans.map((s) => new Scan(s));
    this.reviveCount = stats.ReviveCount;
    this.fomorianEventScore = stats.FomorianEventScore;
    this.pvp = stats.PVP.map((pvp) => new Pvp(pvp));
    this.pvpSpeedballTies = stats.PVPSpeedballTies;
    this.pvpSpeedballChecks = stats.PVPSpeedballChecks;
    this.pvpSpeedballGoals = stats.PVPSpeedballGoals;
    this.pvpSpeedballInterceptions = stats.PVPSpeedballInterceptions;
    this.pvpSpeedballSteals = stats.PVPSpeedballSteals;
    this.pvpSpeedballPoints = stats.PVPSpeedballPoints;
    this.pvpSpeedballLosses = stats.PVPSpeedballLosses;
    this.pvpSpeedballAssists = stats.PVPSpeedballAssists;
    this.pvpSpeedballWins = stats.PVPSpeedballWins;
    this.pvpSpeedballSaves = stats.PVPSpeedballSaves;
    this.pvpSpeedballPasses = stats.PVPSpeedballPasses;
    this.dojoObstacleScore = stats.DojoObstacleScore;
    this.pvpGamesPendingMask = stats.PvpGamesPendingMask;
    this.dedicatedServerGamesCompleted = stats.DedicatedServerGamesCompleted;
    this.colonistRescueEventScoreMax = stats.ColonistRescueEventScoreMax;
    this.ambulasEventScoreMax = stats.AmbulasEventScoreMax;
    this.sentinelGameScore = stats.SentinelGameScore;
    this.amalgamEventScoreMax = stats.AmalgamEventScoreMax;
    this.flotillaEventScore = stats.FlotillaEventScore;
    this.flotillaSpaceBadgesTier1 = stats.FlotillaSpaceBadgesTier1;
    this.flotillaSpaceBadgesTier2 = stats.FlotillaSpaceBadgesTier2;
    this.flotillaSpaceBadgesTier3 = stats.FlotillaSpaceBadgesTier3;
    this.flotillaGroundBadgesTier1 = stats.FlotillaGroundBadgesTier1;
    this.flotillaGroundBadgesTier2 = stats.FlotillaGroundBadgesTier2;
    this.flotillaGroundBadgesTier3 = stats.FlotillaGroundBadgesTier3;
    this.MechSurvivalScoreMax = stats.MechSurvivalScoreMax;
    this.zephyrScore = stats.ZephyrScore;
    this.races = Object.entries(stats.Races).map(([type, { highScore }]) => new Race({ type, highScore }));
    this.portalEventScore = stats.PortalEventScore;
    this.riotMoaEventScore = stats.RiotMoaEventScore;
    this.riotMoaEventScoreMax = stats.RiotMoaEventScoreMax;
    this.projectSinisterEventScore = stats.ProjectSinisterEventScore;
    this.kelaEventBonusScoreMax = stats.KelaEventBonusScoreMax;
    this.halloween19ScoreMax = stats.Halloween19ScoreMax;
    this.survivalEventScore = stats.SurvivalEventScore;
    this.infestedEventScore = stats.InfestedEventScore;
  }
}
