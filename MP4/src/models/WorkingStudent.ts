import { Employee } from "./Employee";
import { Female } from "./Female";
import { Male } from "./Male";

interface IStudent {
  sId: string;
  getAverageGrade: () => number;
}
export class WorkingStudent extends Employee implements IStudent {
  public sId: string;

  constructor(
    gender: Male | Female,
    sId: string,
    pesel: string,
    firstName: string,
    lastName: string,
    salary: number,
    knownLanguages: string[],
    insurance?: string,
    superior?: Employee
  ) {
    super(
      gender,
      pesel,
      firstName,
      lastName,
      salary,
      knownLanguages,
      insurance,
      superior
    );
    this.sId = sId;
  }

  public getAverageGrade(): number {
    return 3.5;
  }
}
