import { Address, AddressSchema } from "./Address.model";
import mongoose from "mongoose";
import { Client } from "./Client.model";

export class InactiveClientDocument
  extends mongoose.Document
  implements Client
{
  name: string;
  surname: string;
  houseNumber: string;
  address: Address;
  lastLogin: Date;

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
    this.lastLogin = new Date();
  }
}

const InactiveClientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  houseNumber: String,
  address: AddressSchema,
});

const InactiveClient = mongoose.model<InactiveClientDocument>(
  "InactiveClient",
  InactiveClientSchema
);

export default InactiveClient;
