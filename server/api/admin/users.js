const router = require("express").Router();
const {checkAdmin, userOrAdminCheck} = require("../checkers")
const {
  models: { User},
} = require("../../db");

router.get("/", async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: [
          "id",
          "username",
          "email",
          "firstName",
          "lastName",
          "isAdmin",
        ],
      });
      res.json(users);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const findUser = await User.findByPk(req.params.id);
      res.json(findUser);
    } catch (err) {
      next(err);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      const editUser = await User.findByPk(req.params.id);
      await editUser.update(req.body);
      res.json(editUser);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteUser = await User.findByPk(req.params.id);
      await deleteUser.destroy();
      res.send(deleteUser);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;
  