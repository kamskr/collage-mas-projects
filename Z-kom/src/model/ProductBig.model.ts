import mongoose from "mongoose";
import { Product } from "./Product.model";

export class ProductBigDocument extends Product {
  weight: number;
  sizes: string;

  constructor(data: {
    name: string;
    companyName: string;
    price: number;
    state: string;
    additionalInfo: string;
    countryOrigin: string;
    weight: number;
    sizes: string;
  }) {
    super({
      name: data.name,
      companyName: data.companyName,
      price: data.price,
      state: data.state,
      additionalInfo: data.additionalInfo,
      countryOrigin: data.countryOrigin,
    });

    this.weight = data.weight;
    this.sizes = data.sizes;
  }
}

export const ProductBigSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  price: Number,
  state: String,
  additionalInfo: String,
  countryOrigin: String,
  weight: Number,
  sizes: String,
});
