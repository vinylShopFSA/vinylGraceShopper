const router = require("express").Router();
const {
  models: { Order, Vinyl, VinylOrder, User },
} = require("../db");

//getting a specific user's unfilled order (cart)
//http://localhost:8080/api/orders/users/:userId
//this the rought to get the orders for specific user
router.get("/:userId/cart", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: "unfulfilled",
      },
      include: [VinylOrder],
    });
    if (userOrder) res.json(userOrder);
  } catch (err) {
    next(err);
  }
});

router.post("/:userId", async (req, res, next) => {
  try {
    const order = await Order.create({
      where: { userId: req.params.userId },
      userId: req.params.userId,
      status: "unfulfilled",
    });
    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId/checkout", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: "unfulfilled",
      },
    });
    if (order) {
      res.json(await order.update({ status: "fulfilled" }));
    } else {
      res.status(404).json({ message: "No unfufilled cart found" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;