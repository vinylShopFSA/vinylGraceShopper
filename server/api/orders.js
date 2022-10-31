const router = require("express").Router();
const {
<<<<<<< HEAD
    models: { Order ,Vinyl, VinylOrder, User },
  } = require("../db");

//getting all unfilled orders from db
router.get('/',async (req,res,next) => {
    try{
        const orders = await Order.findAll({
            // where: {
            //     status: 'un-fufilled',
            // },
        })
        res.json(orders)
    }catch (err){ 
        next(err)
    }
})

//getting a single order from db based on orderid 
router.get('/:id',async (req,res,next) => {
    try {
        const singleOrder = await Order.findByPk(req.params.id)
        res.json(singleOrder)
    } catch (err){ 
        next(err)
    }
})

//getting a specific user's unfilled order (cart)
//http://localhost:8080/api/orders/users/:userId
//this is the route to get the orders for specific user
router.get('/users/:userId',async (req,res,next) => {
    try {
        const userOrder = await Order.findOne({
            include:User,
            where: {
                userId: req.params.userId,status:'un-fufilled'
            },
        })
        res.json(userOrder)
    } catch (err){ 
        next(err)
    }
})
=======
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
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29

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
