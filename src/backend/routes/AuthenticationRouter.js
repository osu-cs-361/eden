const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.EDEN_BACKEND_SECRET || "topsecret";

const AuthenticationRouter = (db) => {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const [user] = await db.select("User", {
      filters: ["email=?"],
      filterParams: [req.body.email],
    });

    const passwordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (passwordCorrect) {
      res.status(200).send({ token: user.token });
    } else {
      res.sendStatus(401);
    }
  });

  router.post("/signup", async (req, res) => {
    const user = { email: req.body.email };
    user.password = bcrypt.hashSync(req.body.password, saltRounds);
    user.token = jwt.sign(user.email, secret);

    const response = await db.insert("User", user);

    if (response.affectedRows === 1) {
      res.status(200).send({ token: user.token });
    } else {
      res.sendStatus(400);
    }
  });

  return router;
};

module.exports = AuthenticationRouter;
