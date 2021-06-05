import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config";

export class UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;

  constructor(data: { email: string; name: string; password: string }) {
    super();
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
  }

  public async comparePassword(candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
  }
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as UserDocument;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.saltWorkFactor);

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// Used for logging in
UserSchema.methods.comparePassword = UserDocument.prototype.comparePassword;

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
