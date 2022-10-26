const router = require("express").Router();
const {
  models: { Vinyl },
} = require("../db");
module.exports = router;

//GET /api/vinyls
router.get("/", async (req, res, next) => {
  try {
    const vinyls = await Vinyl.findAll();

    // o: get into the habit of removing unused code from git before pushing
    //  we can always go backwards in time to find and retrieve code from git if we
    //  need it
    // console.log(vinyls)
    res.json(vinyls);
  } catch (err) {
    next(err);
  }
});

// o: as a general note, I would like for you all to avoid building the backend
//  first on its own because you anticipate that you will need to have it down the
//  line because you want to build your features as complete units instead
//  disparate parts

//GET /api/vinyls/:id
router.get("/:vinylId", async (req, res, next) => {
  try {
    // o: please handle the scenario where a vinyl is not found
    const vinyls = await Vinyl.findByPk(req.params.vinylId);
    // console.log(vinyls)
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
    // o: please handle the scenario where a vinyl is not found
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
    // o: please handle the scenario where a vinyl is not found
    const vinyl = await Vinyl.findByPk(req.params.vinylId);
    res.send(await vinyl.update(req.body));
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
