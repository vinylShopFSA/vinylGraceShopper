const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  purchaseDate: {
    type: Sequelize.DATE,
    // allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("un-fufilled", "fufilled"),
    allowNull: false,
    defaultValue: "un-fufilled",
  },
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Order;
