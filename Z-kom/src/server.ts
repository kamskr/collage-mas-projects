import express from "express";
import config from "./config";
import { deserializeUser } from "./middleware";
import connect from "./db/connect";
import routes from "./routes";
import log from "./logger";
var cors = require("cors");

export const setUpServer = () => {
  const port = config.port as number;
  const host = config.host as string;

  const app = express();
  app.use(deserializeUser);
  // Parses incoming requests with JSON payloads
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);

    connect();

    routes(app);
    console.log("listening");
  });
};
