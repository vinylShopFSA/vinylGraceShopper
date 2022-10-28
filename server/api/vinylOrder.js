const router = require("express").Router();
const {
  models: { Order, Vinyl, User, VinylOrder },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const items = await VinylOrder.findAll({ include: [Vinyl] });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const allItems = await VinylOrder.findAll({
      where: {
        orderId: req.params.id,
      },
      include: [Vinyl],
    });
    res.json(allItems);
  } catch (err) {
    next(err);
  }
});

router.post("/:orderId/:VinylId/:quantity", async (req, res, next) => {
  try {
    const newRecord = await VinylOrder.create({
      orderId: req.params.orderId,
      VinlyId: req.params.VinylId,
      quantity: req.params.quantity,
    });
    res.status(201).json(newRecord);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
