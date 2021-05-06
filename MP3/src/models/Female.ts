export class Female {
  public maidenName: string;

  constructor(maidenName: string) {
    this.maidenName = maidenName;
  }

  public goOnMaternityLeave(): void {
    console.log("I'll be back in 12 months");
  }
}
