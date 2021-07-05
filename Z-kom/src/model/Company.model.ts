import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config";
import { UserDocument } from "./Employee.model";

export class CompanyDocument extends UserDocument {
  nip: string;

  constructor(data: {
    email: string;
    name: string;
    password: string;
    nip: string;
  }) {
    super({ email: data.email, name: data.name, password: data.password });
    this.nip = data.nip;
  }

  public getNip(): string {
    return this.nip;
  }
}

const CompanySchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    nip: { type: String, required: true },
  },
  { timestamps: true }
);

CompanySchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let company = this as CompanyDocument;

  // only hash the password if it has been modified (or is new)
  if (!company.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.saltWorkFactor);

  const hash = await bcrypt.hashSync(company.password, salt);

  // Replace the password with the hash
  company.password = hash;

  return next();
});

// Used for logging in
CompanySchema.methods.comparePassword = UserDocument.prototype.comparePassword;
CompanySchema.methods.sayHello = UserDocument.prototype.sayHello;

const Company = mongoose.model<CompanyDocument>("Company", CompanySchema);

export default Company;
