import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";
import Product, { ProductDocument } from "../model/Product.model";

export async function createProduct(
  input: DocumentDefinition<ProductDocument>
) {
  try {
    return await Product.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export function findProducts(query: FilterQuery<ProductDocument>) {
  return Product.find(query).lean();
}

export function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return Product.findOne(query, {}, options);
}
