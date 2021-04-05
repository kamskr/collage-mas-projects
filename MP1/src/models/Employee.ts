import { Roles } from "./Roles";
import { Seniority } from "./Seniority";

const fs = require("fs");
export class Employee {
  private firstName: string; // simpel attribute
  private lastName: string;
  private employmentDate: Date; // complex attribute & concrete attribute
  private salary: number;
  private role: Roles;
  private knownLanguages: string[]; // repeatable attribute
  private superior?: Employee; // complex & optional attribute
  private insurance?: string; //optional attribute

  private static employeeExtent: Employee[] = []; // class attribute

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    role: Roles,
    knownLanguages: string[],
    insurance?: string,
    superior?: Employee
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employmentDate = new Date();
    this.salary = salary;
    this.role = role;
    this.knownLanguages = knownLanguages;
    this.superior = superior;
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

  public getKnownLanguages(): string[] {
    return this.knownLanguages;
  }

  public setKnownLanguages(knownLanguages: string[]): void {
    this.knownLanguages = knownLanguages;
  }

  public getSuperior(): Employee | undefined {
    return this.superior;
  }

  public setSuperior(superior: Employee): void {
    this.superior = superior;
  }

  public getInsurance(): string | undefined {
    return this.insurance;
  }

  public setInsurance(insurance: string): void {
    this.insurance = insurance;
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

  public static saveEmployees(): void {
    // Save extent
    var serializedObject = JSON.stringify(Employee.employeeExtent);
    fs.writeFile(
      "employees.json",
      serializedObject,
      (err: NodeJS.ErrnoException) => {
        if (err) return console.log(err);
        console.log("Employees saved");
      }
    );
  }

  // Seniority derived attribute realized as method.
  public getSeniority(): Seniority {
    const dateNow = new Date();
    let monthsOfExperience: number;
    monthsOfExperience =
      (dateNow.getFullYear() - this.employmentDate.getFullYear()) * 12;
    monthsOfExperience -= this.employmentDate.getMonth();
    monthsOfExperience += dateNow.getMonth();

    if (monthsOfExperience <= 6) {
      return Seniority.JUNIOR;
    } else if (monthsOfExperience > 6 && monthsOfExperience <= 24) {
      return Seniority.MID;
    }
    return Seniority.SENIOR;
  }

  public sayHello(): void {
    console.log("Hello! I'm an employee!");
  }
}
