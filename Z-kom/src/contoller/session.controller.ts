import { Request, Response } from "express";
import { validatePassword } from "../service/Employee.service";
import {
  createAccessToken,
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import config from "../config";
import { sign } from "../utils/jwt.utils";
import { get } from "lodash";

export const createEmployeeSessionHandler = async (
  req: Request,
  res: Response
) => {
  const employee = await validatePassword(req.body);

  if (!employee) {
    return res.status(401).send("Invalid username or password");
  }

  const session = await createSession(
    employee._id,
    req.get("user-agent") || ""
  );

  const accessToken = createAccessToken({
    employee,
    session,
  });

  const refreshToken = sign(session, {
    expiresIn: config.refreshTokenTtl,
  });

  return res.send({ accessToken, refreshToken });
};

export const invalidateEmployeeSessionHandler = async (
  req: Request,
  res: Response
) => {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  res.sendStatus(200);
};

export const getEmployeeSessionsHandler = async (
  req: Request,
  res: Response
) => {
  const employeeId = get(req, "user._id");
  const sessions = await findSessions({ employee: employeeId, valid: true });
  console.log(employeeId);

  return res.send(sessions);
};
