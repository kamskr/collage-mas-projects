import { Employee } from "./Employee";
import { Roles } from "./Roles";

export class Company {
  private companyName: string;
  private employees: { [pesel: string]: Employee } = {};

  constructor(companyName: string) {
    this.companyName = companyName;
    this.employees = {};
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setcompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  public addEmployee(employee: Employee): void {
    this.employees[employee.getPesel()] = employee;
    employee.setCompany(this);
  }

  public getEmployee(pesel: string): Employee {
    return this.employees[pesel];
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
