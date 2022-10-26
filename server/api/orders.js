const router = require('express').Router()
const {
    models: { Order, ProductOrder },
  } = require("../db");

router.get('/',async (req,res,next) => {
    try{
        const orders = await Order.findAll()
        res.json(orders)
    }catch (err){ 
        next(err)
    }
})

router.get('/:id',async (req,res,next) => {
    try {
        const singleOrder = await Order.findAll(req.params.id)
        res.json(singleOrder)
    } catch (err){ 
        next(err)
    }
})

module.exports = router