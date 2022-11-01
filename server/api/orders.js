const router = require("express").Router();
const {
  models: { Order, Vinyl, VinylOrder, User },
} = require("../db");

const { checkUser } = require("./checkers");

//getting a specific user's unfilled order (cart)
//http://localhost:8080/api/orders/users/:userId
//this the rought to get the orders for specific user
router.get("/cart", checkUser, async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.user.id,
        status: "unfulfilled",
      },
      include: [VinylOrder],
    });
    if (userOrder) res.json(userOrder);
  } catch (err) {
    next(err);
  }
});

router.post("/cart", checkUser, async (req, res, next) => {
  try {
    const order = await Order.create({
      where: { userId: req.user.id },
      // userId:req.user.id
      userId: req.user.id,
      status: "unfulfilled",
    });
    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.put("/checkout", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
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
