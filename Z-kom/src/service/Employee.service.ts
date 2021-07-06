import { DocumentDefinition, FilterQuery } from "mongoose";
import Employee, { EmployeeDocument } from "../model/Employee.model";
import { omit } from "lodash";

export async function createEmployee(
  input: DocumentDefinition<EmployeeDocument>
) {
  try {
    return await Employee.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export function findEmployee(query: FilterQuery<EmployeeDocument>) {
  return Employee.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: EmployeeDocument["email"];
  password: string;
}) {
  const employee = await Employee.findOne({ email });

  if (!employee) {
    return false;
  }

  const isValid = await employee.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(employee.toJSON(), "password");
}
