const router = require("express").Router();
const {checkUser, checkAdmin} = require("../checkers")
const {
  models: { User},
} = require("../../db");

router.get("/", checkUser,checkAdmin, async (req, res, next) => {
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
      const findUser = await User.findByPk(req.params.id);
      res.json(findUser);
    } catch (err) {
      next(err);
    }
  });
  
  router.put("/:id", checkUser,checkAdmin,async (req, res, next) => {
    try {
      const editUser = await User.findByPk(req.params.id);
      await editUser.update(req.body);
      res.json(editUser);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete("/:id", checkUser,checkAdmin,async (req, res, next) => {
    try {
      const deleteUser = await User.findByPk(req.params.id);
      await deleteUser.destroy();
      res.send(deleteUser);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;
  