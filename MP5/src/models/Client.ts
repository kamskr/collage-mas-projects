export abstract class Client {
  public id: string;
  public login: string;
  public password: string;
  public dateJoined: Date;

  constructor(login: string, password: string) {
    this.dateJoined = new Date();
    this.id = Math.random().toString(36).substr(2, 9);
    this.login = login;
    this.password = password;
  }

  public abstract changePassword(newPassword: string): void;

  public abstract checkPassword(password: string): boolean;
}
