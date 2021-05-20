import { EmployeeOverlapping, Student } from ".";

export class Person {
  public pesel: string;
  public firstName: string; // simpel attribute
  public lastName: string;
  public employee: EmployeeOverlapping | null | undefined;
  public student: Student | null | undefined;

  constructor(
    pesel: string,
    firstName: string,
    lastName: string,
    additionalInfo?: {
      salary?: number;
      studentId?: string;
    }
  ) {
    this.pesel = pesel;
    this.firstName = firstName;
    this.lastName = lastName;

    if (additionalInfo) {
      if (additionalInfo.salary) {
        this.addEmployee(additionalInfo.salary);
      }
      if (additionalInfo.studentId) {
        this.addStudent(additionalInfo.studentId);
      }
    }
  }

  public addEmployee(salary: number): void {
    this.employee = new EmployeeOverlapping(salary);
  }

  public addStudent(studentId: string): void {
    this.student = new Student(studentId);
  }
}
