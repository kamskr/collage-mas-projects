import { Roles } from "./Roles";

export class Employee {
  private firstName: string;
  private lastName: string;
  private employmentDate: Date;
  private salary: number;
  private role: Roles;
  private insurance?: string; //optional attribute
  private static employeeExtent: Employee[] = [];

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    role: Roles,
    insurance?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employmentDate = new Date();
    this.salary = salary;
    this.role = role;
    this.insurance = insurance;
    Employee.addEmployee(this);
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getEmploymentDate(): Date {
    return this.employmentDate;
  }

  public setEmploymentDate(employmentDate: Date): void {
    this.employmentDate = employmentDate;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getRole(): Roles {
    return this.role;
  }

  public setRole(role: Roles): void {
    this.role = role;
  }

  public static addEmployee(employee: Employee): void {
    Employee.employeeExtent.push(employee);
  }

  public static showExtent(): void {
    console.log("Extent of the class: " + Employee.name);
    Employee.employeeExtent.forEach((employee) => {
      console.log(employee);
    });
  }
}
