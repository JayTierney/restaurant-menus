const {db} = require('../db');
const { DataTypes } = require('sequelize');

const Item = db.define('Item', {
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    vegetarian: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = { Item }