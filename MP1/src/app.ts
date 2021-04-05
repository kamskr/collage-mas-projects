import { Employee, Roles } from "./models";

export const main = (): void => {
  console.log("hello");

  let testEmp = new Employee(
    "Kamil",
    "Sikora",
    12000,
    Roles.DEVELOPER,
    "insuranceId"
  );

  console.log(testEmp.getEmploymentDate());
  Employee.showExtent();
};
