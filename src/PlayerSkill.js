export default class PlayerSkill {
  constructor(skill) {
    this.space = skill.LPP_SPACE;
    this.engineeringRank = skill.LPS_ENGINEERING;
    this.gunneryRank = skill.LPS_GUNNERY;
    this.pilotingRank = skill.LPS_PILOTING;
    this.tacticalRank = skill.LPS_TACTICAL;
    this.commandRank = skill.LPS_COMMAND;
    this.difter = skill.LPP_DRIFTER;
    this.ridingRank = skill.LPS_DRIFT_RIDING;
    this.combatRank = skill.LPS_DRIFT_COMBAT;
    this.opportunityRank = skill.LPS_DRIFT_OPPORTUNITY;
    this.enduranceRank = skill.LPS_DRIFT_ENDURANCE;
  }
}
