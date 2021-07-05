import mongoose from "mongoose";

export interface Address {
  street: string;
  city: string;
  houseNumber: string;
}

export const AddressSchema = new mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});
