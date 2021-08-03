const express = require("express");
const dbUtil = require("./utils/DbUtil");

const app = new express();
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
  next();
};

app.use(noCors);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/plants", async (req, res) => {
  res.status(200).send(await db.select("Plant"));
});

app.listen(app.get("port"), () => {
  console.log("Eden backend listening on port " + app.get("port"));
});
