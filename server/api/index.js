const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/vinyls", require("./vinyls"));
router.use('/orders', require("./orders"));
router.use('/vinylorder', require("./vinylOrder"))
// router.use('/cart', require("./vinylCart")) 

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
