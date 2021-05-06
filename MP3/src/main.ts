import {
  Employee,
  Manager,
  Engeneer,
  IndividualClient,
  Company,
  Male,
  Female,
  Person,
} from "./models";
import { WorkingStudent } from "./models/WorkingStudent";

export const main = (): void => {
  console.log("\n\n *** MP3 Dziedziczenie *** \n\n");

  // Disjoint
  console.log("\n\n *** Disjoint *** \n\n");
  let employee = new Employee(
    new Male(false),
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
    new Female("Bugatti"),
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
    new Male(false),
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

  // Overlapping
  console.log("\n\n *** Overlapping *** \n\n");

  const person = new Person("123451234", "Mat", "Albert");

  console.log(person);

  const personWithStudentData = new Person("432141122", "Matthias", "Elberto", {
    studentId: "s1234565",
  });

  console.log(personWithStudentData);

  const personWithEmployeeData = new Person("43212341", "Marcel", "Maik", {
    salary: 12000,
  });

  console.log(personWithEmployeeData);

  const personWorkingStudent = new Person("12341234", "Kam", "Es", {
    salary: 12000,
    studentId: "s12341",
  });

  console.log(personWorkingStudent);

  // Wielodziedziczenie
  console.log("\n\n *** Wielodziedziczenie *** \n\n");

  const workingStudent = new WorkingStudent(
    new Male(false),
    "s18586",
    "96120212345",
    "Kamil",
    "Sikora",
    12000,
    ["Polish", "English"],
    "insuranceId"
  );
  console.log(workingStudent);
  console.log(workingStudent.getAverageGrade());
  console.log(workingStudent.getSeniority());

  // Wieloaspektowe
  console.log("\n\n *** Wieloaspektowe *** \n\n");
  console.log(workingStudent.gender);
};
