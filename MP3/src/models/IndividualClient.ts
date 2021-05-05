import { Client } from "./Client";

export class IndividualClient extends Client {
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
    console.log("check password wykonane z IndividualClient");
    if (password === this.password) return true;
    return false;
  }
}
