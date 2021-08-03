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

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/plants", async (req, res) => {
  res.status(200).send(await db.select("Plant"));
});

app.get("/plant/:id", async (req, res) => {
  const [plant] = await db.select("plant", {
    filters: ["id=?"],
    filterParams: [req.params.id],
  });
  res.status(200).send(plant);
});

app.get("/water-plant/:id", async (req, res) => {
  await db.waterPlant(req.params.id);
  res.sendStatus(200);
});

app.put("/edit-plant/:id", async (req, res) => {
  console.log(req.body);
  await db.editPlant(req.params.id, {
    species: req.body.species,
    subtitle: req.body.subtitle,
    notes: req.body.notes,
    watering_interval: req.body.watering_interval,
  });
  res.sendStatus(200);
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
  } else {
    res.sendStatus(500);
  }
});

app.delete("/delete-plant/:id", async (req, res) => {
  const result = await db.delete("Plant", {
    filters: ["id=?"],
    filterParams: [req.params.id],
  });
  if (result.affectedRows > 0) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(app.get("port"), () => {
  console.log("Eden backend listening on port " + app.get("port"));
});
