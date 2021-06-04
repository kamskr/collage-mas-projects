import { Client } from "./Client";
import { Employee } from "./Employee";
import { Employment } from "./Employment";

export class Company extends Client {
  private companyName: string;
  public employeesBinary: Employee[];
  private employeesQualified: { [pesel: string]: Employee } = {};
  public employmentHistory: Employment[]; // atrybut asocjacji

  constructor(companyName: string, login: string, password: string) {
    super(login, password);
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

  public changePassword(newPassword: string) {
    this.password = newPassword;
  }

  public checkPassword(password: string) {
    console.log("check password wykonane z Company");
    if (password === this.password) return true;
    return false;
  }

  public getEmploymentHistory(): Employment[] {
    return this.employmentHistory;
  }
  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
