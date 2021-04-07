import { Employee, Roles, Manager } from "./models";

export const main = (): void => {
  console.log("hello");

  // Tworzenie obiektów klasy "Employee" przy pomocy konstruktora.
  // Kontruktor dodaje równiez obiekt to Ekstensji

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

  // Atrybut prosty
  console.log(emp1.getLastName());
  console.log(emp1.getSalary());

  // Atrybut złozony
  console.log(emp2.getSuperior());

  // Atrybut opcjonalny
  console.log(emp1.getInsurance());

  // Atrybut powtarzalny
  console.log(emp1.getKnownLanguages());

  // Wyświetlanie ekstensji klasy, przechowywanej jako atrybut klasowy
  Employee.showExtent(); // employee extent

  // Atrybut pochodny
  console.log(emp1.getSeniority());

  // Ekstensja - twałość, zapisywanie ekstensji jako pliku JSON
  Employee.saveEmployees();

  // Metoda klasowa
  Employee.showExtent();

  // Przesłonięcie
  const manager1 = new Manager(
    "Jack",
    "Marel",
    9000,
    Roles.MANAGER,
    ["English"],
    [emp1, emp2]
  );

  emp1.sayHello(); //podstawowa metoda
  manager1.sayHello(); //przesłonięcie metody say hello z klasy Employee metoda

  // Przeciążenie, w formie takiej jak w javie, nie jest mozliwe w typescript
  // https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
};
