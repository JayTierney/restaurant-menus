const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

// Restaurant to Menu 1 - n relationship
Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

// items to menu n - m relationship
Item.belongsToMany(Menu, {through: 'MenuItems'})
Menu.belongsToMany(Item, {through: 'MenuItems'})

module.exports = { Restaurant, Menu, Item }
