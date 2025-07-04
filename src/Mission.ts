import { node, nodeEnemy, nodeMissionType } from 'warframe-worldstate-data/utilities';

export interface RawMission {
  Tag?: string | undefined;
  type?: string;
  Mission?: string;
  highScore?: number;
  Completes?: number;
  Tier?: number;
}

/**
 * A mission completed by the player
 * @module
 */
export default class Mission {
  /**
   * Node name
   */
  node: string;
  
  /**
   * Node unique name
   */
  nodeKey: string;

  /**
   * Node mission type
   */
  missionType: string;

  /**
   * Node faction
   */
  faction: string;

  /**
   * Highest score earned in this mission
   */
  highScore?: number;

  /**
   * How many times the mission was completed
   */
  completes?: number;

  /**
   * Denotes a steel path node
   */
  tier?: number;

  /**
   *
   * @param mission The mission data
   * @param locale The locale to return in
   */
  constructor(mission: RawMission, locale = 'en') {
    const uniqueName = (mission.type ?? mission.Tag)!;

    this.node = node(uniqueName, locale);

    this.nodeKey = uniqueName;

    this.missionType = nodeMissionType(uniqueName, locale);

    this.faction = nodeEnemy(uniqueName, locale);

    if (mission.highScore) this.highScore = mission.highScore;

    if (mission.Completes) this.completes = mission.Completes;

    if (mission.Tier) this.tier = mission.Tier;
  }
}
