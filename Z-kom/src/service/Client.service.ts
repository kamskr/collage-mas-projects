import { DocumentDefinition, FilterQuery } from "mongoose";
import RegularClient, {
  RegularClientDocument,
} from "../model/RegularClient.model";

export async function createRegularClient(
  input: DocumentDefinition<RegularClientDocument>
) {
  try {
    return await RegularClient.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export function findClients(query: FilterQuery<RegularClientDocument>) {
  return RegularClient.find(query).lean();
}
