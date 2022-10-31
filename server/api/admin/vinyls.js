const router = require("express").Router();
const{checkUser,checkAdmin} = require("../checkers")
const {
  models: { Vinyl },
} = require("../../db");

router.post("/add",checkUser,checkAdmin, async (req, res, next) => {
    try {
      const vinyl = await Vinyl.create(req.body);
      res.json(vinyl);
    } catch (err) {
      next(err);
    }
  });

router.put("/:id",checkUser,checkAdmin, async (req, res, next) => {
  try {
    const vinyl = await Vinyl.findByPk(req.params.id);
    await vinyl.update(req.body);
    res.json(vinyl);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id",checkUser, checkAdmin,async (req, res, next) => {
  try {
    const vinyl = await Vinyl.findByPk(req.params.id);
    await vinyl.destroy();
    res.send(vinyl);
  } catch (err) {
    next(err);
  }
});

module.exports = router;