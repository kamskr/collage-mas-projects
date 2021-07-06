import { Product } from "./Product.model";
import mongoose from "mongoose";
import { EmployeeDocument } from "./Employee.model";
import { RegularClientDocument } from "./RegularClient.model";

export class OrderDocument extends mongoose.Document {
  client: RegularClientDocument["_id"];
  products: Product["_id"][];
  orderDate: Date;
  totalPrice: number;
  deliveryCost: number;

  constructor(data: {
    products: Product[];
    totalPrice: number;
    deliveryCost: number;
  }) {
    super();
    this.products = data.products;
    this.orderDate = new Date();
    this.totalPrice = data.totalPrice;
    this.deliveryCost = data.deliveryCost;
  }
}

const OrderSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "RegularClient" },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    orderDate: Date,
    totalPrice: Number,
    deliveryCost: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);

export default Order;
