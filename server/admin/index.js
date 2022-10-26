const router = require("express").Router();
const { User } = require("../db/models");

//admin middlewarefunction

async function isUserAdmin(req, res, next) {
  const user = await User.findOne({ where: { id: req.user.id } });
  if (user.isAdmin == false) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
}

//only admin can access all users
router.get("/users");
