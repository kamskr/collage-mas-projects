require("dotenv").config();

export default {
  port: 1337,
  host: "localhost",
  dbUri: process.env.CONNECTION_URL,
  saltWorkFactor: 10,
};
