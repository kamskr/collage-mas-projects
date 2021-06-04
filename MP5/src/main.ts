require("dotenv").config();
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

export const main = (): void => {
  var app = Express();
  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({ extended: true }));

  let database, collection;
  app.listen(5000, () => {
    MongoClient.connect(
      process.env.CONNECTION_URL,
      { useNewUrlParser: true },
      (error: any, client: { db: (arg0: string | undefined) => any }) => {
        if (error) {
          throw error;
        }
        database = client.db(process.env.DATABASE_NAME);
        collection = database.collection("personnel");
        console.log("Connected to `" + process.env.DATABASE_NAME + "`!");
      }
    );
  });
};
