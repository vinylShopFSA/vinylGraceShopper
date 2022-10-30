const router = require("express").Router();
const{checkAdmin} = require("../checkers")
const {
  models: { Vinyl },
} = require("../../db");

router.post("/add", async (req, res, next) => {
    try {
      const newVinyl = await Vinyl.create(req.body);
      res.json(newVinyl);
    } catch (err) {
      next(err);
    }
  });

router.put("/:id", async (req, res, next) => {
  try {
    const editVinyl = await Vinyl.findByPk(req.params.id);
    await editVinyl.update(req.body);
    res.json(editVinyl);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteVinyl = await Vinyl.findByPk(req.params.id);
    await deleteVinyl.destroy();
    res.send(deleteVinyl);
  } catch (err) {
    next(err);
  }
});

module.exports = router;