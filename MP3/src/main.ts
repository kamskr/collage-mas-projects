import { Employee, Manager } from "./models";


export const main = (): void => {
  console.log("\n\n *** MP3 Dziedziczenie *** \n\n");

  // Disjoint & Klasa abstrakcyjna
  console.log("\n\n *** Disjoint *** \n\n");
  let emp1 = new Employee(
    "96120212345",
    "Kamil",
    "Sikora",
    12000,
    ["Polish", "English"],
    "insuranceId"
  );
  let emp2 = new Employee(
    "01120212345",
    "Marina",
    "Satti",
    10000,
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
    ["English"],
    [emp1, emp2]
  );


};
