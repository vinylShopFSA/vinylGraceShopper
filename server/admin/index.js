const router = require("express").Router();
const { User } = require("../db/models");

async function isUserAdmin(req, res, next) {
  const user = await User.findOne({ where: { id: req.user.id } });
  if (user.isAdmin == false) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}
