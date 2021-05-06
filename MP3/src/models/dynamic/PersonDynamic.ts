import { EmployeeDynamic } from "./internal";
import { StudentDynamic } from "./internal";

export class PersonDynamic {
  public pesel: string;
  public firstName: string;
  public lastName: string;

  constructor(pesel: string, firstName: string, lastName: string) {
    this.pesel = pesel;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public changeToEmployee(salary: number): EmployeeDynamic {
    return new EmployeeDynamic(
      this.pesel,
      this.firstName,
      this.lastName,
      salary
    );
  }
  public changeToStudent(studentId: string): StudentDynamic {
    return new StudentDynamic(
      this.pesel,
      this.firstName,
      this.lastName,
      studentId
    );
  }
}
