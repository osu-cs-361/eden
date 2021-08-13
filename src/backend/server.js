const express = require("express");
const dbUtil = require("./utils/DbUtil");

const app = express();

const APP_PORT = process.argv[2] || 4004;
const DB_HOST = process.env.EDEN_DB_HOST || "eden_db";
const TARGET_DB = process.env.EDEN_TARGET_DB || "test";
const DB_PASSWORD = process.env.EDEN_DB_PASSWORD || "";
const DB_USER = process.env.EDEN_DB_USER || "root";

const db = new dbUtil({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: TARGET_DB,
  connectionLimit: 5,
});

app.set("port", APP_PORT);
app.use(express.json());

const noCors = (req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Headers", "*");
  res.append("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") {
    res.send();
    return;
  }
  next();
};
app.use(noCors);

app.get("/api/v1/healthcheck", (req, res) => res.sendStatus(200));
const AuthenticationRouter = require("./routes/AuthenticationRouter");
const EdenServiceRouter = require("./routes/EdenServiceRouter");
app.use("/api/v1", AuthenticationRouter(db));
app.use("/api/v1", EdenServiceRouter(db)); // Uses authorization middleware; routes added after this will require auth

app.listen(app.get("port"), () => {
  console.log("Eden backend listening on port " + app.get("port"));
});
