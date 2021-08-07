const express = require("express");
const dbUtil = require("./utils/DbUtil");

const app = express();
app.set("port", 3030);

const db = new dbUtil({
  host: "eden_db",
  user: "root",
  database: "test",
  connectionLimit: 5,
});

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
