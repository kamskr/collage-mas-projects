import { Express, Request, Response } from "express";
import {
  createOrderHandler,
  deleteOrderHandler,
  getOrderHandler,
  updateOrderHandler,
} from "./contoller/Order.controller";
import {
  createEmployeeSessionHandler,
  invalidateEmployeeSessionHandler,
  getEmployeeSessionsHandler,
} from "./contoller/session.controller";
import { createEmployeeHandler } from "./contoller/Employee.controller";
import { createRegularClientHandler } from "./contoller/Client.controller";
import { validateRequest, requiresUser } from "./middleware";
import {
  createOrderSchema,
  deleteOrderSchema,
  updateOrderSchema,
} from "./schema/Order.schema";
import {
  createEmployeeSchema,
  createEmployeeSessionSchema,
} from "./schema/Employee.schema";
import { createClientSchema } from "./schema/Client.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Authentication
  // Register
  app.post(
    "/api/employees",
    validateRequest(createEmployeeSchema),
    createEmployeeHandler
  );

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createEmployeeSessionSchema),
    createEmployeeSessionHandler
  );
  // Get the user's session
  app.get("/api/sessions", requiresUser, getEmployeeSessionsHandler);
  // Logout
  app.delete("/api/sessions", requiresUser, invalidateEmployeeSessionHandler);

  // Client
  app.post(
    "/api/clients",
    validateRequest(createClientSchema),
    createRegularClientHandler
  );

  // Order
  app.post(
    "/api/orders",
    [requiresUser, validateRequest(createOrderSchema)],
    createOrderHandler
  );
  app.put(
    "/api/orders/:orderId",
    [requiresUser, validateRequest(updateOrderSchema)],
    updateOrderHandler
  );
  app.get("/api/orders/:orderId", getOrderHandler);
  app.delete(
    "/api/orders/:orderId",
    [requiresUser, validateRequest(deleteOrderSchema)],
    deleteOrderHandler
  );
}
