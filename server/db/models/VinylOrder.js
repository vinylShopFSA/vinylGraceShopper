const Sequelize= require('sequelize')
const db = require('../db')

const VinylOrder = db.define('vinylOrder', {
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
    },
 }
})

module.exports = VinylOrder