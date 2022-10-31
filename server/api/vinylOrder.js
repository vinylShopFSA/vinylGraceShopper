<<<<<<< HEAD
// const router = require('express').Router()
// const {
//     models: { Order,Vinyl,User, VinylOrder},
//   } = require("../db");
=======
const router = require("express").Router();
const { request } = require("express");
const {
  models: { Order, Vinyl, User, VinylOrder },
} = require("../db");
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29

// router.get("/", async (req, res, next) => {
//   try {
//     const items = await VinylOrder.findAll({ include: [Vinyl] });
//     if (items) res.json(items);
//   } catch (error) {
//     next(error);
//   }
// });

<<<<<<< HEAD
//   router.get('/',async (req,res,next) => {
//     try {
//         const items = await VinylOrder.findAll()
//         res.json(items)
//     } catch (err){ 
//         next(err)
//     }
// })
// // router.get('/:id',async (req,res,next) => {
// //     try {
// //         const singleItem = await VinylOrder.findByPk(req.params.id)
// //         res.json(singleItem)
// //     } catch (err){ 
// //         next(err)
// //     }
// // })

// router.get('/:id',async (req,res,next) => {
//     try {
//         const allItems = await VinylOrder.findAll({
//             where: {
//                 orderId: req.params.id
//             }
//         })
//         res.json(allItems)
//     } catch (err){ 
//         next(err)
//     }
// })

// module.exports = router
=======
// router.get("/:orderId", async (req, res, next) => {
//   try {
//     const allItems = await VinylOrder.findAll({
//       where: {
//         orderId: req.params.orderId,
//       },
//       include: [Vinyl],
//     });
//     if (allItems) res.json(allItems);
//   } catch (error) {
//     next(error);
//   }
// });

//GET api/vinylOrder/:userId/cart
router.get("/:userId/cart", async (req, res, next) => {
  try {
    //get unfulfilled cart
    const cart = await Order.findOne({
      where: { userId: req.params.userId, status: "unfulfilled" },
    });

    //get the vinylOrders for the cart
    if (cart) {
      const vinylOrders = await VinylOrder.findAll({
        where: { orderId: cart.id },
        include: [Vinyl],
      });
      res.json(vinylOrders);
    } else {
      res.status(404).json({ message: "No unfufilled cart found" });
    }
  } catch (error) {
    next(error);
  }
});

//GET api/vinylOrder/:userId/cart/:id
router.get("/:userId/cart/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: { userId: req.params.userId, status: "unfulfilled" },
    });

    //get single vinylOrder of unfufilled cart
    if (cart) {
      const singleItem = await VinylOrder.findOne({
        where: {
          orderId: cart.id,
          id: req.params.id,
        },
        include: [Vinyl],
      });
      res.json(singleItem);
    } else {
      res.status(404).json({ message: "No unfufilled cart found" });
    }
  } catch (error) {
    next(error);
  }
});

//add vinylOrder to cart
//POST api/vinylOrder/:userId/cart
router.post("/:userId/cart", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: { userId: req.params.userId, status: "unfulfilled" },
    });

    if (cart) {
      const newRecord = await VinylOrder.findOrCreate({
        where: {
          orderId: cart.id,
          VinylId: req.body.VinylId,
        },
        defaults: {
          quantity: 1,
        },
        include: [Vinyl],
      });
      res.status(201).json(newRecord);
    } else {
      res.status(404).json({ message: "No unfufilled cart found" });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:userId/cart/:VinylId", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: { userId: req.params.userId, status: "unfulfilled" },
    });
    if (cart) {
      const vinylOrder = await VinylOrder.findOne({
        where: {
          orderId: cart.id,
          VinylId: req.params.VinylId,
        },
        returning: true,
      });
      res.json(await vinylOrder.update({ quantity: req.body.quantity }));
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId/cart/:VinylId", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: { userId: req.params.userId, status: "unfulfilled" },
    });

    const vinylOrder = await VinylOrder.findOne({
      where: {
        orderId: cart.id,
        VinylId: req.params.VinylId,
      },
    });
    if (vinylOrder) {
      await vinylOrder.destroy();
      res.send(vinylOrder);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
