module.exports = (db) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.header("Authorization");
      if (!authHeader) {
        res.status(401).send("Authorization header missing");
      } else {
        const token = authHeader.replace("Bearer ", "");
        const [user] = await db.select("User", {
          filters: ["token=?"],
          filterParams: [token],
        });
        if (!user || !user.id) {
          res.status(401).send("Invalid authorization token");
        }
        res.locals.user = user;
        next();
      }
    } catch (e) {
      next(e);
    }
  };
};
