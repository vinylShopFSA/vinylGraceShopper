const router = require("express").Router();
const{checkUser,checkAdmin} = require("../checkers")
const {
  models: { Vinyl },
} = require("../../db");

router.post("/add",checkUser,checkAdmin, async (req, res, next) => {
    try {
      const newVinyl = await Vinyl.create(req.body);
      res.json(newVinyl);
    } catch (err) {
      next(err);
    }
  });

router.put("/:id",checkUser,checkAdmin, async (req, res, next) => {
  try {
    // o: why not just name it "vinyl",  also what about if vinyl is not found
    const editVinyl = await Vinyl.findByPk(req.params.id);
    await editVinyl.update(req.body);
    res.json(editVinyl);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id",checkUser, checkAdmin,async (req, res, next) => {
  try {
    // o: why not just name it "vinyl",  also what about if vinyl is not found
    const deleteVinyl = await Vinyl.findByPk(req.params.id);
    await deleteVinyl.destroy();
    res.send(deleteVinyl);
  } catch (err) {
    next(err);
  }
});

module.exports = router;