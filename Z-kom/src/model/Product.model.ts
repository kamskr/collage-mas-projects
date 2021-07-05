import mongoose from "mongoose";

export abstract class Product extends mongoose.Document {
  name: string;
  companyName: string;
  price: number;
  state: string;
  additionalInfo: string;
  countryOrigin: string;

  constructor(data: {
    name: string;
    companyName: string;
    price: number;
    state: string;
    additionalInfo: string;
    countryOrigin: string;
  }) {
    super();
    this.name = data.name;
    this.companyName = data.companyName;
    this.price = data.price;
    this.state = data.state;
    this.additionalInfo = data.additionalInfo;
    this.countryOrigin = data.countryOrigin;
  }
}
