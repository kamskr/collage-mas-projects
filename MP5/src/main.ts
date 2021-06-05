import express from "express";
import config from "./config";
import { deserializeUser } from "./middleware";
import connect from "./db/connect";
import routes from "./routes";
import log from "./logger";
import User from "./model/user.model";
import { findSessions } from "./service/session.service";
import Session from "./model/session.model";
import Company, { CompanyDocument } from "./model/Company.model";

export const main = (): void => {
  const port = config.port as number;
  const host = config.host as string;

  const app = express();
  app.use(deserializeUser);
  // Parses incoming requests with JSON payloads
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);

    connect();

    routes(app);
  });

  testModels();
};
const testModels = async () => {
  // MP 4
  // klasy
  const user = await User.findOne({ email: "test@test.ts" });
  console.log("\n\n *** Klasy *** \n\n");
  user?.sayHello();

  // asocjacje
  console.log("\n\n *** Asocjacje *** \n\n");
  const sessions = await Session.find({ user: user?._id, valid: true }).lean();
  console.log(sessions);

  // dziedziczenie
  console.log("\n\n *** Dziedziczenie *** \n\n");
  const company = await Company.findOne({ email: "company@email.co" });
  company?.sayHello();
};
