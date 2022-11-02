// const router = require("express").Router();
// const { request } = require("express");
// const {
//   models: { Order, Vinyl, User, VinylOrder },
// } = require("../db");
// const { checkUser } = require("./checkers");

// //getting a specific user's unfilled order (cart)
// //this the rought to get the orders for specific user
// router.get("/cart", checkUser, async (req, res, next) => {
//   try {
//     const userOrder = await Order.findOne({
//       where: {
//         userId: req.user.id,
//         status: "unfulfilled",
//       },
//       include: [VinylOrder, Vinyl],
//     });
//     if (userOrder) res.json(userOrder);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/cart", checkUser, async (req, res, next) => {
//   try {
//     const order = await Order.create({
//       where: { userId: req.user.id },
//       userId: req.user.id,
//       status: "unfulfilled",
//     });
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put("/checkout/:orderId", async (req, res, next) => {
//   try {
//     const order = await Order.findOne({
//       where: { id: req.params.orderId, status: "unfulfilled" },
//     });
//     res.send(await order.update({ status: "fulfilled" }));
//   } catch (err) {
//     next(err);
//   }
// });

// module.exports = router;

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
      include: [VinylOrder, Vinyl],
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

router.put("/checkout/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.orderId, status: "unfulfilled" },
    });
    if (order) res.json(await order.update({ status: "fulfilled" }));
  } catch (err) {
    next(err);
  }
});
module.exports = router;
