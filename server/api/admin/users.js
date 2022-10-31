const router = require("express").Router();
const {checkUser, checkAdmin} = require("../checkers")
const {
models: { User},
} = require("../../db");

router.get("/", checkUser, checkAdmin, async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: [
          "id",
          "username",
        ],
      });
      res.json(users);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/:id", checkUser,async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  });
  
  router.put("/:id", checkUser,checkAdmin,async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      await user.update(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete("/:id", checkUser,checkAdmin,async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      res.send(user);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;
  