import express from "express";
import router from "./routes.js";
import cors from "cors";
import DbConnection from "./database/database.js";

const app = express();
import cron from "node-cron";

cron.schedule(" */15 * * * *", () => {
  console.log("running");
});
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use("/", router);
DbConnection();
app.get("/", (req, res) => {
  res.send("sucess");
});
app.listen(PORT, () => {
  console.log("server start at port 5000");
});
