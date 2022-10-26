//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Vinyl = require("./models/Vinyl");
const Order = require("./models/Order");
const VinylOrder = require("./models/VinylOrder");

Order.belongsTo(User)
User.hasMany(Order)

Vinyl.belongsToMany(Order, { through: VinylOrder})
Order.belongsToMany(Vinyl, { through: VinylOrder })

module.exports = {
  db,
  models: {
    User,
    Vinyl,
  },
};
