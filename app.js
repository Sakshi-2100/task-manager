import express from "express";
import connectDb from "./db/connect.js";
import "dotenv/config";
const app = express();

app.use(express.json());

app.use("/api/v1/tasks", routes);

import routes from "./routes/tasks.js";

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (error) {
    return console.log(error);
  }
};

start();
