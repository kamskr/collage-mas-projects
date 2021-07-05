import mongoose from "mongoose";
import { Product } from "./Product.model";

export class ProductSmallDocument extends Product {
  maxWeight: number;

  constructor(data: {
    name: string;
    companyName: string;
    price: number;
    state: string;
    additionalInfo: string;
    countryOrigin: string;
    maxWeight: number;
  }) {
    super({
      name: data.name,
      companyName: data.companyName,
      price: data.price,
      state: data.state,
      additionalInfo: data.additionalInfo,
      countryOrigin: data.countryOrigin,
    });
    this.maxWeight = data.maxWeight;
  }
}

export const ProductBugSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  price: Number,
  state: String,
  additionalInfo: String,
  countryOrigin: String,
  weight: Number,
  sizes: String,
});
