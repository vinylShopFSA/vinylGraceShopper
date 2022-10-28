const router = require('express').Router()
const {
    models: { Order ,Vinyl, VinylOrder, User },
  } = require("../db");

//getting all unfilled orders from db
router.get('/',async (req,res,next) => {
    try{
        const orders = await Order.findAll({
            where: {
                status: 'un-fufilled',
            },
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
router.get('/user/:userId',async (req,res,next) => {
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

//if no orders, then find or create for user 
router.get("/user/:userId/findcart", async (req, res, next) => {
    try {
        //place order into array once more
      const [order] = await Order.findOrCreate({
        include: User,
        where: {
          userId: req.params.userId,
          status: 'un-fufilled',
        },
      });
      res.json(order);
    } catch (err) {
      next(err);
    }
  });

//getting all the records that belong to a specific order
router.get("/:id/vinyls", async (req, res, next) => {
    try {
      const data = await Vinyl.findAll({
        include: [
          {
            model: Order,
            where: {
              id: req.params.id,
              status: 'un-fufilled',
            },
            through: {
              attributes: [],
              //place them into an array 
            },
          },
        ],
      });
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
// adding a single product to cart/(order)
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
    router.put('/:id',async (req,res,next) => {
        try {
            const order = await Order.update(req.body)
            res.json(order)
        } catch (err){
            next(err)
        }
    })


module.exports = router