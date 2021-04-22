import { Employee, Roles, Manager } from "./models";
import { Company } from "./models/Company";

export const main = (): void => {
  console.log("\n\n *** MP2 *** \n\n");

  let emp1 = new Employee(
    "96120212345",
    "Kamil",
    "Sikora",
    12000,
    Roles.DEVELOPER,
    ["Polish", "English"],
    "insuranceId"
  );
  let emp2 = new Employee(
    "01120212345",
    "Marina",
    "Satti",
    10000,
    Roles.DEVELOPER,
    ["Greek", "Arabic"],
    "insuranceId2",
    emp1
  );

  // Przesłonięcie
  const manager1 = new Manager(
    "01120254321",
    "Jack",
    "Marel",
    9000,
    Roles.MANAGER,
    ["English"],
    [emp1, emp2]
  );

  // Asociacja binarna
  let tesla = new Company("Tesla");

  tesla.addEmployee(emp1);
  tesla.addEmployee(emp2);
  tesla.addEmployee(manager1);

  // Sprawdzenie działania -> pesel: 96120212345 nalezy do emp1
  console.log(tesla.getEmployee("96120212345"));

  // Sprawdzenie działania połączenia zwrotnego
  console.log(emp1.getCompany());
};
