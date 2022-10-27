const Sequelize= require('sequelize')
const db = require('../db')

const VinylOrder = db.define('vinylOrder', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
    },
    // cost:{
    //     type: Sequelize.FLOAT,
    //     allowNull: false,
    //    defaultValue: null
    // }
 }
})

module.exports = VinylOrder