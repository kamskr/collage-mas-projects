import { PersonDynamic } from "./internal";

export class StudentDynamic extends PersonDynamic {
  public studentId: string;

  constructor(
    pesel: string,
    firstName: string,
    lastName: string,
    studentId: string
  ) {
    super(pesel, firstName, lastName);
    this.studentId = studentId;
  }
}
