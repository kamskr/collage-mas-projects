import { Employee, Manager, Engeneer } from "./models";



export const main = (): void => {
  console.log("\n\n *** MP3 Dziedziczenie *** \n\n");

  // Disjoint & Klasa abstrakcyjna
  console.log("\n\n *** Disjoint *** \n\n");
  let employee = new Employee(
    "96120212345",
    "Kamil",
    "Sikora",
    12000,
    ["Polish", "English"],
    "insuranceId"
  ); 
  console.log(employee)

  // Manager dziedziczy by Employee
  let manager = new Manager(
    "01120212345",
    "Marina",
    "Satti",
    10000,
    ["Greek", "Arabic"],
    [employee],
    "insuranceId2"
  );
  console.log(manager)

  // Engeneer równiez dziedziczy po employee
  const engeneer = new Engeneer(
    "01120254321",
    "Jack",
    "Marel",
    9000,
    ["English"],
    ["Java", "JS","Python"],
  );
  console.log(engeneer)
  
  


};
