const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { userOrAdminCheck } = require("./checkers");


router.use("/orders", require("./orders.js"));
router.use("/vinyls", require("./vinyls"));
router.use("/admin", require("./admin"));
// router.use('/vinylorder', require("./vinylOrder"))
// router.use('/cart', require("./vinylCart")) 

router.use("*", async (req, res, next) => {
  if (req.headers.authorization) {
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    console.log(user, "user")
  }
  next();
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;