import { Request, Response } from "express";
import { omit } from "lodash";
import { createRegularClient, findClients } from "../service/Client.service";
import log from "../logger";

export const createRegularClientHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const client = await createRegularClient(req.body);
    return res.send(client.toJSON());
  } catch (error) {
    log.error(error.message);
    return res.status(409).send(error.message);
  }
};

export const getClientsHandler = async (req: Request, res: Response) => {
  const clients = await findClients({});

  return res.send(clients);
};
