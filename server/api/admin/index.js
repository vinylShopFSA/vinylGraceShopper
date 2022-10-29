
const router = require("express").Router();

router.use("/vinyls", require("./vinyls"));
router.use("/users", require("./users"));

router.use((req, res, next) => {
  const error = new Error("you dont have access to these functions");
  error.status = 404;
  next(error);
});

module.exports = router;