import { Employee } from "./Employee";
import { Employment } from "./Employment";
import { Roles } from "./Roles";

export class Company {
  private companyName: string;
  public employeesBinary: Employee[];
  private employeesQualified: { [pesel: string]: Employee } = {};
  public employmentHistory: Employment[]; // atrybut asocjacji

  constructor(companyName: string) {
    this.companyName = companyName;
    this.employeesBinary = [];
    this.employeesQualified = {};
    this.employmentHistory = [];
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setcompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  public addEmployeeBinary(employee: Employee): void {
    this.employeesBinary.push(employee);
    employee.setCompany(this);
  }

  public getEmployeeBinary(pesel: string): Employee {
    const employee = this.employeesBinary.find(
      (employee) => employee.getPesel() === pesel
    );

    if (employee) return employee;

    throw new Error("There is no employee with that pesel");
  }

  public addEmployeeQualified(employee: Employee): void {
    this.employeesQualified[employee.getPesel()] = employee;
    employee.setCompany(this);
  }

  public addEmployeeAsociationAttribute(
    employee: Employee,
    dateStart: Date,
    dateEnd: Date
  ): void {
    const emploment = new Employment(this, employee, dateStart, dateEnd);
    this.employmentHistory.push(emploment);
    employee.employmentHistory.push(emploment);
  }

  public getEmployeeQualified(pesel: string): Employee {
    return this.employeesQualified[pesel];
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
