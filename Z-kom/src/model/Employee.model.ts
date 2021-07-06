import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config";
import { Person } from "./Person.model";

enum Specialisation {
  frontEndDeveloper = "Front End Developer",
  backendDeveloper = "Back End Developer",
  manager = "Manager",
  salesman = "Salesman",
}
interface IEmployee {
  getSalary: () => number;
  getTrainings: () => string[];
  getEmail: () => string;
  setNewSalary: (salary: number) => void;
}

export class EmployeeDocument
  extends mongoose.Document
  implements Person, IEmployee
{
  email: string;
  name: string;
  surname: string;
  password: string;
  salary: number;
  trainings: string[];
  specialisation: Specialisation;

  constructor(data: {
    email: string;
    name: string;
    surname: string;
    password: string;
    salary: number;
    trainings: string[];
    specialisation: Specialisation;
  }) {
    super();
    this.email = data.email;
    this.name = data.name;
    this.surname = data.surname;
    this.password = data.password;
    this.salary = data.salary;
    this.trainings = data.trainings;
    this.specialisation = data.specialisation;
  }

  getSalary = (): number => {
    return this.salary;
  };

  getTrainings = (): string[] => {
    return this.trainings;
  };

  getEmail = (): string => {
    return this.email;
  };
  setNewSalary = (salary: number): void => {
    if (salary < this.salary) {
      throw Error("New salary can't be lower than previous!");
    }

    this.salary = salary;
  };
  public async comparePassword(candidatePassword: string): Promise<boolean> {
    const user = this as EmployeeDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
  }
}

const EmployeeSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    salary: {
      type: Number,
      required: true,
      min: [2000, "Must be greater than 2000"],
    },
    trainings: {
      type: Array,
      required: true,
    },
    specialisation: { type: String, required: true },
  },
  { timestamps: true }
);

EmployeeSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let employee = this as EmployeeDocument;

  // only hash the password if it has been modified (or is new)
  if (!employee.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.saltWorkFactor);

  const hash = await bcrypt.hashSync(employee.password, salt);

  // Replace the password with the hash
  employee.password = hash;

  return next();
});

// Used for logging in
EmployeeSchema.methods.getSalary = EmployeeDocument.prototype.getSalary;
EmployeeSchema.methods.comparePassword =
  EmployeeDocument.prototype.comparePassword;
EmployeeSchema.methods.getTrainings = EmployeeDocument.prototype.getTrainings;
EmployeeSchema.methods.getEmail = EmployeeDocument.prototype.getEmail;
EmployeeSchema.methods.setNewSalary = EmployeeDocument.prototype.setNewSalary;

const Employee = mongoose.model<EmployeeDocument>("Employee", EmployeeSchema);

export default Employee;
