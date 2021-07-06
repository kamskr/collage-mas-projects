import mongoose from "mongoose";

export class ProductDocument extends mongoose.Document {
  name: string;
  companyName: string;
  price: number;
  state: string;
  additionalInfo: string;
  countryOrigin: string;
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
    super();
    this.name = data.name;
    this.companyName = data.companyName;
    this.price = data.price;
    this.state = data.state;
    this.additionalInfo = data.additionalInfo;
    this.countryOrigin = data.countryOrigin;
    this.weight = data.weight;
    this.sizes = data.sizes;
  }
}

export const ProductSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  price: Number,
  state: String,
  additionalInfo: String,
  countryOrigin: String,
  weight: Number,
  sizes: String,
});

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
