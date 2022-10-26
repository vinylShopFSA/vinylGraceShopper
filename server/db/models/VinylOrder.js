const Sequelize= require('sequelize')
const db = require('../db')

const ProductOrder = db.define('productOrder', {
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
    },
    purchaseCost:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
    }
  } 
 }
})

module.exports = ProductOrder