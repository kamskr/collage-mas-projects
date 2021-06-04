import { Employee } from ".";

export class Team {
  private teamLeader: Employee | undefined;
  private teamMembers: Employee[];

  constructor(teamMembers: Employee[]) {
    this.teamMembers = teamMembers;
  }

  public getTeamMembers(): Employee[] {
    return this.teamMembers;
  }

  public setTeamMembers(teamMembers: Employee[]): void {
    this.teamMembers = teamMembers;
  }

  public addTeamMember(teamMember: Employee): void {
    this.teamMembers.push(teamMember);
  }

  public getTeamLeader(): Employee {
    if (!this.teamLeader) {
      throw new Error("This group doesn't have a leader.");
    }
    return this.teamLeader;
  }

  public setTeamLeader(teamLeader: Employee) {
    if (this.teamMembers.indexOf(teamLeader) < 0) {
      throw new Error(
        "This employee doesn't exist in the team! Only team members can become leaders."
      );
    }
    if (
      !(
        new Date().getFullYear() -
          teamLeader.getEmploymentDate().getFullYear() >=
        2
      )
    ) {
      throw new Error("Employee must be with company atleas 2 years");
    }
    this.teamLeader = teamLeader;
  }
}
