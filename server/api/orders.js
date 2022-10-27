const router = require('express').Router()
const {
    models: { Order,Vinyl,User },
  } = require("../db");
const VinylOrder = require('../db/models/VinylOrder');

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
        const singleOrder = await Order.findByPk(req.params.id)
        res.json(singleOrder)
    } catch (err){ 
        next(err)
    }
})

router.get('/user/:userId',async (req,res,next) => {
    try {
        const singleOrder = await Order.findAll({
            where: {
                userId: req.params.userId
            },
        })
        res.json(singleOrder)
    } catch (err){ 
        next(err)
    }
})

router.post('/',async (req,res,next) => {
    try {
        if(!req.body.id) {
            const order = await Order.create(req.body)
           res.json(order)
        } else {
            const order = await Order.findOne(req.body.id)
            res.json(order)
        }
        } catch (err){ 
        next(err)
        }
    })

    router.put('/:id',async (req,res,next) => {
        try {
            const order = await Order.update(req.body)
            res.json(order)
        } catch (err){
            next(err)
        }
    })


module.exports = router