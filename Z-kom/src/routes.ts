import { Express, Request, Response } from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  updatePostHandler,
} from "./contoller/post.controller";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "./contoller/session.controller";
import { createUserHandler } from "./contoller/user.controller";
import { validateRequest, requiresUser } from "./middleware";
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from "./schema/post.schema";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Authentication
  // Register
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
  // Get the user's session
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);
  // Logout
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);

  // Post
  app.post(
    "/api/posts",
    [requiresUser, validateRequest(createPostSchema)],
    createPostHandler
  );
  app.put(
    "/api/posts/:postId",
    [requiresUser, validateRequest(updatePostSchema)],
    updatePostHandler
  );
  app.get("/api/posts/:postId", getPostHandler);
  app.delete(
    "/api/posts/:postId",
    [requiresUser, validateRequest(deletePostSchema)],
    deletePostHandler
  );
}
