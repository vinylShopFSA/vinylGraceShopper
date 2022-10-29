const router = require("express").Router();
const User = require("../db/models/User")
const { userOrAdminCheck } = require("./checkers");


router.use("/orders", userOrAdminCheck, require("./orders.js"));
router.use("/vinyls", require("./vinyls"));
router.use("/admin", require("./admin"));
// router.use('/vinylorder', require("./vinylOrder"))
// router.use('/cart', require("./vinylCart")) 

router.use("*", async (req, res, next) => {
  if (req.headers.authorization) {
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
  }
  next();
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;