import { Employee } from "./Employee";
import { Roles } from "./Roles";

export class Engeneer extends Employee {
  private programmingLanguages: string[];

  constructor(
    pesel: string,
    firstName: string,
    lastName: string,
    salary: number,
    knownLanguages: string[],
    programmingLanguages: string[],
    insurance?: string,
    superior?: Employee
  ) {
    super(
      pesel,
      firstName,
      lastName,
      salary,
      knownLanguages,
      insurance,
      superior
    );
    this.programmingLanguages = programmingLanguages;
  }

  public sayHello(): void {
    console.log("Hello I'm a manager!");
  }

  public getProgrammingLanguages(): string[]  {
    return this.programmingLanguages;
  }

  public setProgrammingLanguages(programmingLanguages: string[]): void {
    this.programmingLanguages = programmingLanguages;
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
