const express = require("express");

const AuthenticationRouter = (db) => {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const [user] = await db.select("User", {
      filters: ["email=?"],
      filterParams: [req.body.email],
    });

    if (user.password === req.body.password) {
      res.status(200).send({ token: user.token });
    }

  });

  // TODO: Sign up

  return router;
};

module.exports = AuthenticationRouter;
