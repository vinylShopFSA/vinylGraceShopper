const router = require("express").Router();
const {
  models: { Vinyl },
} = require("../db");
module.exports = router;

//GET /api/vinyls
router.get("/", async (req, res, next) => {
  try {
    const vinyls = await Vinyl.findAll();
    // console.log(vinyls)
    res.json(vinyls);
  } catch (err) {
    next(err);
  }
});

//GET /api/vinyls/:id
router.get("/:vinylId", async (req, res, next) => {
  try {
    const vinyls = await Vinyl.findByPk(req.params.vinylId);
    // console.log(vinyls)
    res.json(vinyls);
  } catch (err) {
    next(err);
  }
});
