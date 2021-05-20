export class EmployeeOverlapping {
  public salary: number;
  public employmentDate: Date;

  constructor(salary: number) {
    this.salary = salary;
    this.employmentDate = new Date();
  }
}
