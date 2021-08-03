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
  next();
};
app.use(noCors);
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/plants", async (req, res) => {
  res.status(200).send(await db.select("Plant"));
});

app.post("/new-plant", async (req, res) => {
  const response = await db.insert("Plant", {
    ...req.body,
    last_watered: new Date(req.body.last_watered)
      .toISOString()
      .replace("T", " ")
      .replace("Z", ""),
  });
  if (response.insertId) {
    res.sendStatus(200);
  }
  res.sendStatus(500);
});

app.listen(app.get("port"), () => {
  console.log("Eden backend listening on port " + app.get("port"));
});
