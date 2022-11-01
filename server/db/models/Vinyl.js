const Sequelize = require("sequelize");
const db = require("../db");

const Vinyl = db.define("Vinyl", {
  vinylName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://s3.amazonaws.com/static.tumblr.com/jn9hrij/20Ul2zzsr/albumart.jpg",
  },
  year: Sequelize.INTEGER,
  price: {
    type: Sequelize.DECIMAL(2),
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  label: {
    type: Sequelize.STRING,
    defaultValue: "Independent",
  },
});

module.exports = Vinyl;
