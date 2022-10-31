const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  purchaseDate: {
    type: Sequelize.DATE,
    // allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("unfulfilled", "fulfilled"),
    allowNull: false,
    defaultValue: "unfulfilled",
  },
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Order;
