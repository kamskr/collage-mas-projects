import { Client } from "./Client";

export class Company extends Client {
  public firstName: string;
  public lastName: string;
  public pesel: string;
  public phoneNumber: string;

  constructor(
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    pesel: string,
    phoneNumber: string
  ) {
    super(login, password);
    this.firstName = firstName;
    this.lastName = lastName;
    this.pesel = pesel;
    this.phoneNumber = phoneNumber;
  }

  public changePassword(newPassword: string) {
    this.password = newPassword;
  }

  public checkPassword(password: string) {
    if (password === this.password) return true;
    return false;
  }

  // Override
  // Typescript doesn't provide traditional overloading: https://stackoverflow.com/questions/12688275/is-there-a-way-to-do-method-overloading-in-typescript/12689054#12689054
}
