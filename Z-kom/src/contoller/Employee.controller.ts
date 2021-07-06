import { Request, Response } from "express";
import { omit } from "lodash";
import { createEmployee } from "../service/Employee.service";
import log from "../logger";

export const createEmployeeHandler = async (req: Request, res: Response) => {
  try {
    const employee = await createEmployee(req.body);
    return res.send(omit(employee.toJSON(), "password"));
  } catch (error) {
    log.error(error.message);
    return res.status(409).send(error.message);
  }
};
