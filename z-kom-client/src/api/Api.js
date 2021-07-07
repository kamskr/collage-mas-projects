import { HttpClient } from "./HttpClient";
//
export class Api {
  client;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || "");
  }

  setAuthToken(token) {
    this.client.setCommonHeader("Authorization", token);
  }

  clearAuthToken() {
    this.client.deleteCommonHeader("Authorization");
  }

  async login({ login, password }) {
    const res = await this.client.post("/login/", {
      email: login,
      password: password,
    });
    return res;
  }
}
