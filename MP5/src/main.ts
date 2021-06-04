import express from "express";
import config from "./config";
// import { deserializeUser } from "./middleware";
import connect from "./db/connect";
import routes from "./routes";
import log from "./logger";

export const main = (): void => {
  const port = config.port as number;
  const host = config.host as string;

  const app = express();
  // app.use(deserializeUser);
  console.log(config);
  // Parses incoming requests with JSON payloads
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);

    connect();

    routes(app);
  });
};
