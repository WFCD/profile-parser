export default class Enemy {
  constructor(enemy) {
    this.uniqueName = enemy.type;
    this.kills = enemy.kills;
    this.headshots = enemy.headshots;
    this.executions = enemy.executions;
    this.assists = enemy.assists;
    this.deaths = enemy.deaths;
  }
}
