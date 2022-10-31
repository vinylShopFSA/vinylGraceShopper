const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { checkUser } = require("./checkers");


router.use("/orders",checkUser, require("./orders.js"));
router.use("/vinyls", require("./vinyls"));
router.use("/admin", require("./admin"));
// router.use('/vinylorder', require("./vinylOrder"))
// router.use('/cart', require("./vinylCart")) 

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;