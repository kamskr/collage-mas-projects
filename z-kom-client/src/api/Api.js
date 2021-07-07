import { HttpClient } from "./HttpClient";
//
export class Api {
  client;

  constructor() {
    this.client = new HttpClient("http://localhost:1337/api");
  }

  setAuthToken(token) {
    this.client.setCommonHeader("Authorization", token);
  }

  clearAuthToken() {
    this.client.deleteCommonHeader("Authorization");
  }

  async login({ login, password }) {
    const res = await this.client.post("/sessions", {
      email: login,
      password: password,
    });
    return res;
  }

  async logout() {
    const res = await this.client.delete("/sessions");
    return res;
  }

  async addProduct(data) {
    const res = await this.client.post("/products", data);
    return res;
  }
}
