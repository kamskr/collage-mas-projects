import {
  Employee,
  Manager,
  Engeneer,
  IndividualClient,
  Company,
} from "./models";

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
  console.log(employee);

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
  console.log(manager);

  // Engeneer równiez dziedziczy po employee
  const engeneer = new Engeneer(
    "01120254321",
    "Jack",
    "Marel",
    9000,
    ["English"],
    ["Java", "JS", "Python"]
  );
  console.log(engeneer);

  // Klasa abstrakcyjna
  console.log("\n\n *** Klasa abstrakcyjna *** \n\n");
  // Zarówno client1 jak i client2 dziedziczą po abstrakcyjnej klasie Client,
  // posiadają atrybuty z Client takie jak: id, login, password i dateJoined,
  // oraz implementują abstrakcyjne metody changePassword i checkPassword

  const client1 = new IndividualClient(
    "login1",
    "password1",
    "Kamil",
    "Sikora",
    "11234121",
    "123123123"
  );
  console.log(client1);
  const client2 = new Company("Tesla", "login2", "password2");
  console.log(client2);

  // Polimorficzne wołanie metody
  console.log("\n\n *** Polimorficzne wołanie metody *** \n\n");
  client1.checkPassword("test");
  client2.checkPassword("test");
};
