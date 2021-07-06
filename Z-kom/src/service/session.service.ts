import { FilterQuery, LeanDocument, UpdateQuery } from "mongoose";
import Session, { SessionDocument } from "../model/session.model";
import { EmployeeDocument } from "../model/Employee.model";
import config from "../config";
import { decode, sign } from "../utils/jwt.utils";
import { get } from "lodash";
import { findEmployee } from "./Employee.service";

export async function createSession(employeeId: string, userAgent: string) {
  const session = await Session.create({ employee: employeeId, userAgent });

  return session.toJSON();
}

export function createAccessToken({
  employee,
  session,
}: {
  employee:
    | Omit<EmployeeDocument, "password">
    | LeanDocument<Omit<EmployeeDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = sign(
    { ...employee, session: session._id },
    { expiresIn: config.refreshTokenTtl } // 15 minutes
  );

  return accessToken;
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = decode(refreshToken);
  if (!decoded || !get(decoded, "_id")) return false;

  const session = await Session.findById(get(decoded, "_id"));

  if (!session || !session?.valid) return false;

  const employee = await findEmployee({ _id: session.employee });

  if (!employee) return false;

  const accessToken = createAccessToken({ employee, session });

  return accessToken;
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}
