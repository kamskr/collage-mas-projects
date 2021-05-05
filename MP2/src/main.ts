import { Employee, Roles, Manager } from "./models";
import { Car } from "./models/Car";
import { CarPart } from "./models/CarPart";
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

  let tesla = new Company("Tesla");
  let spaceX = new Company("SpaceX");

  // Asocjacja binarna
  console.log("\n\n *** Asocjacja binarna *** \n\n");
  tesla.addEmployeeBinary(emp1);
  tesla.addEmployeeBinary(emp2);
  tesla.addEmployeeBinary(manager1);

  // Sprawdzenie działania -> pesel: 01120254321 nalezy do manager1
  console.log(
    "\n\nSprawdzenie działania -> pesel: 01120254321 nalezy do manager1\n\n"
  );
  console.log(tesla.getEmployeeBinary("01120254321"));

  // Sprawdzenie połączenia zwrotnego

  console.log(manager1.getCompany);

  // Asocjacja z atrybutem
  console.log("\n\n *** Asocjacja z atrybutem *** \n\n");

  spaceX.addEmployeeAsociationAttribute(
    emp1,
    new Date(2010, 11, 20),
    new Date(2015, 11, 20)
  );
  spaceX.addEmployeeAsociationAttribute(
    emp2,
    new Date(2011, 11, 22),
    new Date(2020, 10, 21)
  );

  tesla.addEmployeeAsociationAttribute(
    emp1,
    new Date(2015, 11, 20),
    new Date(2020, 11, 20)
  );

  // Sprawdzenie działa - historia zatrudnień w firme SpaceX
  console.log(
    "\n\nSprawdzenie działa - historia zatrudnień w firme SpaceX\n\n"
  );
  console.log(spaceX.employmentHistory);

  // Sprawdzenie działania połączenia zwrotnego -> historia zatrudnienia emp1
  console.log(
    "\n\nSprawdzenie działania połączenia zwrotnego -> historia zatrudnienia emp1\n\n"
  );
  console.log(emp1.employmentHistory);

  // Asociacja kwalifikowana
  console.log("\n\n *** Asocjacja kwalifikowana *** \n\n");

  tesla.addEmployeeQualified(emp1);
  tesla.addEmployeeQualified(emp2);
  tesla.addEmployeeQualified(manager1);

  // Sprawdzenie działania -> pesel: 96120212345 nalezy do emp1
  console.log(
    "\n\nSprawdzenie działania -> pesel: 96120212345 nalezy do emp1\n\n"
  );
  console.log(tesla.getEmployeeQualified("96120212345"));

  // Sprawdzenie działania połączenia zwrotnego
  console.log("\n\nSprawdzenie działania połączenia zwrotnego\n\n");
  console.log(emp1.getCompany());

  // Kompozycja
  console.log("\n\n *** Kompozycja *** \n\n");

  let car: Car | null = new Car("XM12", "volvo");

  let breaks = CarPart.createPart(car, "breaks", 2000);
  let wheels = CarPart.createPart(car, "wheels", 10000);
  CarPart.createPart(car, "tiers", 4000);

  console.log(car);

  // Czy mogę dodać tą samą część do innego samochodu?

  let car2 = new Car("XM13", "skoda");
  car2.addCarPart(breaks);

  // A do tego samego?
  car.addCarPart(wheels);
};
