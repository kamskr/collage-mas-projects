import { Female, Male } from ".";
import { Company } from "./Company";
import { Employment } from "./Employment";
import { Seniority } from "./Seniority";
import { minimalSalary, maxSalaryChangePercent } from "../consts";

const fs = require("fs");

export class Employee {
  public gender: Male | Female;
  private pesel: string;
  private company: Company | null;
  private firstName: string; // simpel attribute
  private lastName: string;
  private employmentDate: Date; // complex attribute & concrete attribute
  private salary: number;
  private knownLanguages: string[]; // repeatable attribute
  private superior?: Employee; // complex & optional attribute
  private insurance?: string; //optional attribute
  public employmentHistory: Employment[]; // atrybut asocjacji

  private static employeeExtent: Employee[] = []; // class attribute
  private static peselList: { [key: string]: Employee } = {};

  constructor(
    gender: Male | Female,
    pesel: string,
    firstName: string,
    lastName: string,
    salary: number,
    knownLanguages: string[],
    insurance?: string,
    superior?: Employee
  ) {
    if (Employee.peselList[pesel]) {
      throw new Error("Employee with that pesel already exists!");
    }
    this.gender = gender;
    this.pesel = pesel;
    this.company = null;
    this.firstName = firstName;
    this.lastName = lastName;
    this.employmentDate = new Date();
    this.salary = salary;
    this.knownLanguages = knownLanguages;
    this.superior = superior;
    this.insurance = insurance;
    this.employmentHistory = [];
    Employee.peselList[pesel] = this;
    Employee.addEmployee(this);
  }

  public getPesel(): string {
    return this.pesel;
  }

  public setPesel(pesel: string): void {
    if (Employee.peselList[pesel]) {
      throw new Error("Employee with that pesel already exists!");
    }
    delete Employee.peselList[this.pesel];
    Employee.peselList[pesel] = this;
    this.pesel = pesel;
  }

  public getCompany(): Company {
    if (this.company) {
      return this.company;
    }
    throw new Error("This employee doesn't have company");
  }

  public setCompany(company: Company): void {
    this.company = company;
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
    if (salary < minimalSalary) {
      throw new Error("Salary can't be lower than minimal");
    }
    if (salary < this.salary) {
      throw new Error("New salary cant be lower than old salary");
    }

    if (this.salary * (1 + maxSalaryChangePercent / 100) < salary) {
      throw new Error(`Maximum salary increase is ${maxSalaryChangePercent}%`);
    }
    this.salary = salary;
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
