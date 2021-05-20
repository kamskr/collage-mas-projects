export class Male {
  public isInMilitary: boolean;

  constructor(isInMilitary: boolean) {
    this.isInMilitary = isInMilitary;
  }

  public goToMilitary(): void {
    this.isInMilitary = true;
  }
}
