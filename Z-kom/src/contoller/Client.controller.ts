import { Request, Response } from "express";
import { omit } from "lodash";
import { createRegularClient, findClients } from "../service/Client.service";
import log from "../logger";

export const createRegularClientHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const employee = await createRegularClient(req.body);
    return res.send(omit(employee.toJSON(), "password"));
  } catch (error) {
    log.error(error.message);
    return res.status(409).send(error.message);
  }
};

export const getAllClientsHandler = async (req: Request, res: Response) => {
  const clients = await findClients({});

  return res.send(clients);
};
