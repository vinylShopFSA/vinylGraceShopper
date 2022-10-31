
const db = require("./db");

const User = require("./models/User");
const Vinyl = require("./models/Vinyl");
const Order = require("./models/Order");
const VinylOrder = require("./models/VinylOrder");

Order.belongsTo(User);
User.hasMany(Order);

Vinyl.belongsToMany(Order, { through: VinylOrder, unique: false });
Order.belongsToMany(Vinyl, { through: VinylOrder, unique: false });

Order.hasMany(VinylOrder);
VinylOrder.belongsTo(Order);

Vinyl.hasMany(VinylOrder);
VinylOrder.belongsTo(Vinyl);

module.exports = {
  db,
  models: {
    User,
    Vinyl,
    Order,
    VinylOrder,
  },
};
