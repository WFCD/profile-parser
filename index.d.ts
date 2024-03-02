import { Polarity } from 'warframe-items';
import ItemConfig from './src/ItemConfig';
import Mission from './src/Mission';
import OperatorLoadOuts from './src/OperatorLoadOuts';
import Stats from './src/Stats';
import Syndicate from './src/Syndicate';
import WeaponSkin from './src/WeaponSkin';
import XpInfo from './src/XpInfo';

declare module 'profile-parser' {
  export default class ProfileParser {
    constructor(data: Map<String, any>, locale: string);
    profile: Profile;
    techProjects: Map<String, any>;
    xpComponents: Map<String, any>;
    xpCacheExpiryDate: Date;
    ceremonyResetDate: Date;
    stats: Stats;
  }

  class Profile {
    constructor(profile: Map<String, dynamic>, locale: string);
    displayName: string;
    masteryRank: number;
    loadout: LoadOutInventory;
    intrinsics: Intrinsics;
    challengeProgress: ChallengeProgress[];
    guildId: string;
    guildTier: number;
    guildXp: number;
    guildClass: string;
    guildEmblem: string;
    allianceId: string;
    deathMarks: string;
    harvestable: boolean;
    deathSquadable: boolean;
    created: Date;
    migratedToConsole: boolean;
    missions: Mission[];
    syndicates: Syndicate[];
    dailyStanding: DailyStanding;
    dailyFocus: number;
    unlockedOperator: boolean;
    unlockedAlignment: boolean;
    operatorLoadouts: OperatorLoadOuts[];
    alignment: Alignment;
  }

  interface DailyStanding {
    daily: number;
    conclave: number;
    simaris: number;
    ostron: number;
    quills: number;
    solaris: number;
    ventKids: number;
    voxSolaris: number;
    entrai: number;
    necraloid: number;
    holdfasts: number;
    kahl: number;
    cavia: number;
  }

  interface Alignment {
    wisdom: number;
    alignment: number;
  }

  class Ability {
    uniqueName: string;
    used: number;
  }

  class ChallengeProgress {
    uniqueName: string;
    progress: number;
  }

  class Enemy {
    uniqueName: string;
    kills: number;
    headshots: number;
    executions: number;
    assists: number;
    deaths: number;
  }

  class Intrinsics {
    space: number;
    engineering: number;
    gunnery: number;
    piloting: number;
    tactical: number;
    command: number;
    drifter: number;
    riding: number;
    combat: number;
    opportunity: number;
    endurance: number;
  }

  class LoadOutInventory {
    weaponSkins: WeaponSkin[];
    suits: LoadOutItem[];
    secondary: LoadOutItem[];
    primary: LoadOutItem[];
    melee: LoadOutItem[];
    xpInfo: XpInfo[];
  }

  class LoadOutItem {
    itemId: string;
    uniqueName: string;
    name: string;
    itemName: string;
    configs: ItemConfig[];
    upgradeType: string;
    upgradeFingerprint: any;
    features: number;
    upgradeVer: number;
    xp: number;
    polarized: number;
    polarity: Polarity;
    focuseLens: string;
    customizationSlotPurchases: number;
    primaryColor: ColorMap;
  }
}
