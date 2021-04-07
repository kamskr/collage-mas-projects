import { Employee } from "./Employee";
import { Roles } from "./Roles";

export class Manager extends Employee {
  private subordinates: Employee[];

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    role: Roles,
    knownLanguages: string[],
    subordinates: Employee[],
    insurance?: string,
    superior?: Employee
  ) {
    super(
      firstName,
      lastName,
      salary,
      role,
      knownLanguages,
      insurance,
      superior
    );
    this.subordinates = subordinates;
  }

  public sayHello(): void {
    console.log("Hello I'm a manager!");
  }

  public getSubordinates(): Employee[] {
    return this.subordinates;
  }

  public setSubordinates(subordinates: Employee[]): void {
    this.subordinates = subordinates;
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
