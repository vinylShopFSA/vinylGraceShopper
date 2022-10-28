const router = require('express').Router()
const { models: { User, Order, Vinyl,VinylOrder }} = require('../db')
module.exports = router

// include admin and user check middleware -- research 
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username", "email",
      "firstName",
      "lastName",
      "idAdmin",],
      // include:Order
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    res.send(findUser);
  } catch (err) {
    next(err);
  }
});
