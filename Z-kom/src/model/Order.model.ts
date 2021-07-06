import { ProductDocument, ProductSchema } from "./Product.model";
import mongoose from "mongoose";
import { EmployeeDocument } from "./Employee.model";
import { RegularClientDocument } from "./RegularClient.model";

export class OrderDocument extends mongoose.Document {
  clientId: RegularClientDocument["_id"];
  products: ProductDocument[];
  orderDate: Date;
  totalPrice: number;
  deliveryCost: number;

  constructor(data: {
    products: ProductDocument[];
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
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "RegularClient" },
    products: [ProductSchema],
    orderDate: Date,
    totalPrice: Number,
    deliveryCost: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);

export default Order;
