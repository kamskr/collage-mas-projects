import { Company } from "./Company";
import { Employee } from "./Employee";
import { Roles } from "./Roles";

export class Employment {
  public company: Company;
  public employee: Employee;
  public dateStart: Date;
  public dateEnd: Date;

  constructor(
    company: Company,
    employee: Employee,
    dateStart: Date,
    dateEnd: Date
  ) {
    this.company = company;
    this.employee = employee;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
