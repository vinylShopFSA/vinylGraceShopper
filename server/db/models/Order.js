const Sequelize= require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    purchaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status:{
        type: Sequelize.ENUM('in-cart', 'fufilled', 'canceled', 'pending'),
        allowNull: false,
        defaultValue: 'in-cart',
    }
})

module.exports = Order