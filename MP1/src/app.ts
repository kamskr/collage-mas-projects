import { Employee, Roles, Manager } from "./models";

const fs = require("fs");

export const main = (): void => {
  console.log("hello");

  let emp1 = new Employee(
    "Kamil",
    "Sikora",
    12000,
    Roles.DEVELOPER,
    ["Polish", "English"],
    "insuranceId"
  );
  let emp2 = new Employee(
    "Marina",
    "Satti",
    10000,
    Roles.DEVELOPER,
    ["Greek", "Arabic"],
    "insuranceId2",
    emp1
  );

  console.log(emp1.getEmploymentDate());
  Employee.showExtent();

  // save extent
  Employee.saveEmployees();

  // override
  const manager1 = new Manager(
    "Jack",
    "Marel",
    9000,
    Roles.MANAGER,
    ["English"],
    [emp1, emp2]
  );
};
