const express = require("express");
const routeAuthMiddleware = require("../utils/routeAuthMiddleware");

const EdenServiceRouter = (db) => {
  const router = express.Router();
  router.use(routeAuthMiddleware(db));

  router.get("/plants", async (req, res) => {
    res.status(200).send(
      await db.select("Plant", {
        filters: ["owner_id=?"],
        filterParams: [res.locals.user.id],
      })
    );
  });

  router.get("/plant/:id", async (req, res) => {
    const [plant] = await db.select("plant", {
      filters: ["id=?", "owner_id=?"],
      filterParams: [req.params.id, res.locals.user.id],
    });
    if (!plant || !plant.id) {
      res.sendStatus(404);
    } else {
      res.send(plant);
    }
  });

  router.get("/water-plant/:id", async (req, res) => {
    const result = await db.waterPlant(req.params.id, res.locals.user.id);
    if (result.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });

  router.put("/edit-plant/:id", async (req, res) => {
    const result = await db.editPlant(req.params.id, res.locals.user.id, {
      species: req.body.species,
      subtitle: req.body.subtitle,
      notes: req.body.notes,
      watering_interval: req.body.watering_interval,
    });
    if (result.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });

  router.post("/new-plant", async (req, res) => {
    const response = await db.insert("Plant", {
      owner_id: res.locals.user.id,
      species: req.body.species,
      subtitle: req.body.subtitle,
      notes: req.body.notes,
      watering_interval: req.body.watering_interval,
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
      filters: ["id=?", "owner_id=?"],
      filterParams: [req.params.id, res.locals.user.id],
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
