const {db} = require('../db')
const {Restaurant, Menu} = require('../models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('../seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
å
    });

    test('can create a Menu', async () => {
        const seedTestMenu = await Menu.create(seedMenu[0])
        expect(seedTestMenu.title).toEqual(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        const checkRestaurants = await Restaurant.findAll()
        expect(checkRestaurants[0].name).toEqual(seedRestaurant[0].name)
    });

    test('can find Menus', async () => {
        const checkMenu = await Menu.findAll()
        expect(checkMenu[0].title).toEqual(seedMenu[0].title)
    });

    test('can delete Restaurants', async () => {
        const findRest = await Restaurant.findAll()
        const deleteRest = await findRest[0].destroy()
        expect(deleteRest.name).toEqual(findRest[0].name)
    });
})