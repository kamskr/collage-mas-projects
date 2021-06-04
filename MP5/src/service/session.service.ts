import { LeanDocument } from "mongoose";
import Session, { SessionDocument } from "../model/session.model";
import { UserDocument } from "../model/user.model";
import config from "../config";
import { sign } from "../utils/jwt.utils";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.refreshTokenTtl } // 15 minutes
  );

  return accessToken;
}
