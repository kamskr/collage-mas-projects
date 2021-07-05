import { Address, AddressSchema } from "./Address.model";
import mongoose from "mongoose";
import { Client } from "./Client.model";

export class RegularClientDocument extends mongoose.Document implements Client {
  name: string;
  surname: string;
  houseNumber: string;
  address: Address;

  constructor(data: {
    name: string;
    surname: string;
    houseNumber: string;
    address: Address;
  }) {
    super();
    this.name = data.name;
    this.surname = data.surname;
    this.houseNumber = data.houseNumber;
    this.address = data.address;
  }
}

const RegularClientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  houseNumber: String,
  address: AddressSchema,
});

const RegularClient = mongoose.model<RegularClientDocument>(
  "RegularClient",
  RegularClientSchema
);

export default RegularClient;
