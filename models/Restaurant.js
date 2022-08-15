const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');


const Restaurant = db.define('Restaurant', {
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    cuisine: {
        type: DataTypes.STRING,
    }
})

module.exports = {Restaurant};