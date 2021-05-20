import {
  Employee,
  Manager,
  Engeneer,
  Male,
  Female,
  Team,
  Company,
  IndividualClient,
  Car,
} from "./models";
import {} from "./models/Car";

export const main = (): void => {
  console.log("\n\n *** MP3 Dziedziczenie *** \n\n");

  const employee = new Employee(
    new Male(false),
    "96120212345",
    "Kamil",
    "Sikora",
    12000,
    ["Polish", "English"],
    "insuranceId"
  );
  const manager = new Manager(
    new Female("Bugatti"),
    "01120212345",
    "Marina",
    "Satti",
    10000,
    ["Greek", "Arabic"],
    [employee],
    "insuranceId2"
  );

  const engeneer = new Engeneer(
    new Male(false),
    "01120254321",
    "Jack",
    "Marel",
    9000,
    ["English"],
    ["Java", "JS", "Python"]
  );

  // Ograniczenia Atrybutów
  console.log("** ATRYBUTÓW **");

  try {
    engeneer.setSalary(50);
  } catch (e) {
    console.error(e);
  }
  try {
    engeneer.setSalary(8000);
  } catch (e) {
    console.error(e);
  }
  try {
    engeneer.setSalary(199999999);
  } catch (e) {
    console.error(e);
  }

  engeneer.setSalary(9500);
  console.log("Success! New salary: ", engeneer.getSalary());

  //Unique
  console.log("\n\n** UNIQUE **\n\n");
  // Do zaimplementowania Ograniczenia {unique} wykorzystalem literał obiektowy JavaScript.
  // Pozwala to na szybkie wyciągnięcie peselu z kolekcji oraz łatwe sprawdzenie czy wartosci są unikalne

  // Proba stworzenia engeneer z istniejącym peselem
  let engeneer2;
  try {
    engeneer2 = new Engeneer(
      new Male(false),
      "01120254321",
      "Kamil",
      "Mareli",
      17000,
      ["English"],
      ["TS", "JS", "SQL"]
    );
  } catch (e) {
    console.error(e);
  }

  //  Proba zmiany peselu na istniejący

  try {
    employee.setPesel("01120212345");
  } catch (e) {
    console.error(e);
  }
  // to juz zadziała
  engeneer2 = new Engeneer(
    new Male(false),
    "01120254399",
    "Kamil",
    "Mareli",
    17000,
    ["English"],
    ["TS", "JS", "SQL"]
  );
  console.log(engeneer2);

  engeneer2.setEmploymentDate(new Date(2000, 1, 1));
  // Subset
  console.log("\n\n** SUBSET **\n\n");

  const team = new Team([employee, engeneer, manager]);

  // Nie ma employee 2 w tym zespole więc powinien się wyświetlić błąd
  try {
    team.setTeamLeader(engeneer2);
  } catch (e) {
    console.error(e);
  }

  team.addTeamMember(engeneer2);

  //this works
  try {
    team.setTeamLeader(engeneer2);
  } catch (e) {
    console.error(e);
  }

  console.log(team);

  // Ordered
  console.log("\n\n** ORDERED **\n\n");
  // Funkcjonalnośc zaimplementowałem w klasie Car. Samochody posiadają kolejke wynajmu dla danego samochodu.
  // Kolejni klienci chcący wynając samochód zawsze wpadają na koniec kolejki, kolejność jest więc zawsze
  // zgodna z kolejnością wprowadzenia do systemu

  const company = new Company("Tesla", "t1213412", "hardPassword");
  const client2 = new IndividualClient(
    "login",
    "password",
    "some",
    "name",
    "12341234",
    "1234123"
  );

  const car = new Car("tsl", "X");

  car.requestRental(company);
  car.requestRental(client2);

  console.log(car.getRentQueue());

  // Bag
  console.log("\n\n** BAG **\n\n");
  // Ta funkcjonalność została zamilementowana w klasie Company
  // przechowywana jest kazda relacja miedzy Company a Employee
  // za pomocą employmentHistory

  company.addEmployeeAsociationAttribute(
    employee,
    new Date(1995, 11, 17),
    new Date(2001, 11, 17)
  );
  company.addEmployeeAsociationAttribute(
    employee,
    new Date(2003, 11, 17),
    new Date(2010, 11, 17)
  );

  console.log(company.getEmploymentHistory());

  // Xor
  console.log("\n\n** BAG **\n\n");

  //  Ograniczenie własne
  console.log("\n\n** OGRANICZENIA WŁASNE **\n\n");
  // Jak rozumiem, są to dowonle ograniczenia wymagane przez klienta
  // Przykład: Aby pracownik stał się team leaderem, musi posiadać conajmniej 2 lata doświadczenia w obecnej firmie.
  try {
    team.setTeamLeader(engeneer);
  } catch (e) {
    console.log(e);
  }
};
