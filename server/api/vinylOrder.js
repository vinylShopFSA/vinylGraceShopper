// const router = require('express').Router()
// const {
//     models: { Order,Vinyl,User, VinylOrder},
//   } = require("../db");


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