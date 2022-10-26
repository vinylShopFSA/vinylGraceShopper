const Sequelize = require("sequelize");
const db = require("../db");

const Vinyl = db.define("Vinyl", {
  vinylName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://s3.amazonaws.com/static.tumblr.com/jn9hrij/20Ul2zzsr/albumart.jpg",
  },
  year: Sequelize.INTEGER,
  price: {
    // o: you should specify a scale of 2 here Sequelize.DECIMAL(2)
    type: Sequelize.DECIMAL,
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
    type: Sequelize.TEXT,
    allowNull: false,
  },
  // o: something to think about is, you may want to implement this as a table
  //  of genres / labels if you plan to only have a large set of genres / labels
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
