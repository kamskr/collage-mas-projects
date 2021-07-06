import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Order, { OrderDocument } from "../model/Order.model";

export function createOrder(input: DocumentDefinition<OrderDocument>) {
  return Order.create(input);
}

export function findOrder(
  query: FilterQuery<OrderDocument>,
  options: QueryOptions = { lean: true }
) {
  return Order.findOne(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<OrderDocument>,
  update: UpdateQuery<OrderDocument>,
  options: QueryOptions
) {
  return Order.findOneAndUpdate(query, update, options);
}

export function deleteOrder(query: FilterQuery<OrderDocument>) {
  return Order.deleteOne(query);
}
