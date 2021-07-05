import User from "./model/Employee.model";
import Session from "./model/session.model";
import Company from "./model/Company.model";
import { setUpServer } from "./server";

export const main = async (): Promise<void> => {
  setUpServer();

  // User jest klasą zdefiniowaną w src/model User.findOne pobiera z bazy danych usera o danych przekazanych jako parametr.
  // W tym przykładzie pobieramy z bazy Usera posiadającego email test@test.ts
  // Pobrany obiekt posiada metody zdefiniowane w modelu, np sayHello:
  console.log("\n\n *** Klasy *** \n\n");
  const user = await User.findOne({ email: "test@test.ts" });
  user?.sayHello();

  // asocjacje
  // Zaimplementowana została asocjacja pomiędzy Userem oraz Sesją.
  // W ponizszym przykładzie pobieramy wszystkie obiekty klasy Session, przypisane do pobranego wyzej Usera, posiadające status valid: true.
  // Obiekt sesji jest tworzony w momencie gdy user zaloguje się do Aplikacji

  console.log("\n\n *** Asocjacje *** \n\n");
  const sessions = await Session.find({ user: user?._id, valid: true }).lean();
  console.log(sessions);

  // dziedziczenie
  // Klasa Company dziedziczy po klasie User
  // Dlatego ma dostęp do metody sayHello();

  console.log("\n\n *** Dziedziczenie *** \n\n");
  const company = await Company.findOne({ email: "company@email.co" });
  company?.sayHello();
};
