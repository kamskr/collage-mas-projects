import { Address } from "./Address.model";
import { Person } from "./Person.model";

export interface Client extends Person {
  address: Address;
}
