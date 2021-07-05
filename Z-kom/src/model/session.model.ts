import mongoose from "mongoose";
import { EmployeeDocument } from "./Employee.model";

export class SessionDocument extends mongoose.Document {
  employee: EmployeeDocument["_id"];
  valid: boolean;
  userAgent: string;

  constructor(data: { valid: boolean; userAgent: string }) {
    super();
    this.valid = data.valid;
    this.userAgent = data.userAgent;
  }
}

const SessionSchema = new mongoose.Schema(
  {
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model<SessionDocument>("Session", SessionSchema);

export default Session;
