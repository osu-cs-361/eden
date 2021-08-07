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

const noCors = (req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Headers", "*");
  res.append("Access-Control-Allow-Methods", "*");
  next();
};
app.use(noCors);
app.use(express.json());

const EdenServiceRouter = require("./routes/EdenServiceRouter");
const AuthenticationRouter = require("./routes/AuthenticationRouter");
app.use("/api/v1/", EdenServiceRouter(db));
app.use("/api/v1/", AuthenticationRouter(db));

app.get("/api/v1/healthcheck", (req, res) => res.sendStatus(200));

app.listen(app.get("port"), () => {
  console.log("Eden backend listening on port " + app.get("port"));
});
