import { PersonDynamic } from "./internal";

export class EmployeeDynamic extends PersonDynamic {
  public salary: number;
  public employmentDate: Date;

  constructor(
    pesel: string,
    firstName: string,
    lastName: string,
    salary: number
  ) {
    super(pesel, firstName, lastName);
    this.salary = salary;
    this.employmentDate = new Date();
  }
}
