const express = require("express");

const EdenServiceRouter = (db) => {
  const router = express.Router();

  router.get("/plants", async (req, res) => {
    res.status(200).send(await db.select("Plant"));
  });

  router.get("/plant/:id", async (req, res) => {
    const [plant] = await db.select("plant", {
      filters: ["id=?"],
      filterParams: [req.params.id],
    });
    res.status(200).send(plant);
  });

  router.get("/water-plant/:id", async (req, res) => {
    await db.waterPlant(req.params.id);
    res.sendStatus(200);
  });

  router.put("/edit-plant/:id", async (req, res) => {
    console.log(req.body);
    await db.editPlant(req.params.id, {
      species: req.body.species,
      subtitle: req.body.subtitle,
      notes: req.body.notes,
      watering_interval: req.body.watering_interval,
    });
    res.sendStatus(200);
  });

  router.post("/new-plant", async (req, res) => {
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

  router.delete("/delete-plant/:id", async (req, res) => {
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

  return router;
};

module.exports = EdenServiceRouter;
