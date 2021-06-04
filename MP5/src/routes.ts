import { Express, Request, Response } from "express";
import { createUserHandler } from "./contoller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
}
