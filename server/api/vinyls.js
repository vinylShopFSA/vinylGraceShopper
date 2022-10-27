const router = require("express").Router();
const {
  models: { Vinyl },
} = require("../db");
module.exports = router;

//GET /api/vinyls
router.get("/", async (req, res, next) => {
  try {
    const vinyls = await Vinyl.findAll();
    res.json(vinyls);
  } catch (err) {
    next(err);
  }
});

//GET /api/vinyls/:id
router.get("/:vinylId", async (req, res, next) => {
  try {
    const vinyls = await Vinyl.findByPk(req.params.vinylId);
    res.json(vinyls);
  } catch (err) {
    next(err);
  }
});

// POST /api/vinyl
router.post("/", async (req, res, next) => {
  try {
    const newVinyl = await Vinyl.create(req.body);
    res.send(newVinyl);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/vinyl/:id
router.delete("/:vinylId", async (req, res, next) => {
  try {
    const vinyl = await Vinyl.findByPk(req.params.vinylId);
    await vinyl.destroy();
    res.send(vinyl);
  } catch (error) {
    next(error);
  }
});

// UPDATE /api/vinyl/:id
router.put("/:vinylId", async (req, res, next) => {
  try {
    const vinyl = await Vinyl.findByPk(req.params.vinylId);
    res.send(await vinyl.update(req.body));
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
