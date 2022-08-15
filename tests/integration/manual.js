const { Menu, Item, Restaurant } = require('../../models')
const { db } = require('../../db')

async function main(){

    //sync the whole database
    await db.sync({force: true});

    //create some restaurant
    const mcdonalds = await Restaurant.create({
        name: 'Mcdonalds',
        location: 'Liverpool',
        cuisine: 'American'
    })
    const nandos = await Restaurant.create({
        name: 'Nandos',
        location: 'Manchester',
        cuisine: 'Mexican'
    });

    //create a menu
    const breakfast = await mcdonalds.createMenu({
        title: 'Breakfast'
    })
    const afternoon = await mcdonalds.createMenu({
        title: 'Afternoon'
    })
    const evening = await nandos.createMenu({
        title: 'Evening'
    })

    //create items
    const chips = await afternoon.createItem({
        name: 'Chips',
        image: 'chips.jpg',
        price: 20,
        vegetarian: true
    })
    const chicken = await afternoon.createItem({
        name: 'Chicken',
        image: 'chicken.jpg',
        price: 10,
        vegetarian: false
    }) 
    const burger = await afternoon.createItem({
        name: 'Burger',
        image: 'burger.jpg',
        price: 15,
        vegetarian: false
    }) 
    const hallumi = await afternoon.createItem({
        name: 'Halloumi',
        image: 'halloumi.jpg',
        price: 30,
        vegetarian: true
    })
    const breakfastwrap = await breakfast.createItem({
        name: 'Breakfast Wrap',
        image: 'breakfastwrap.jpg',
        price: 7.5,
        vegetarian: true
    }) 

    await evening.addItem(chips)
    await evening.addItem(burger)
    await evening.addItem(chicken)

// eager loading
    const mcdonaldsItems = await Restaurant.findOne({
        where: 
            {name: 'Mcdonalds'},
        include: [Menu]
    })
    console.log('\n\nWith everything:\n', mcdonaldsItems.toJSON())

    const morningmenu = await Menu.findOne({
        where: 
            {title: 'Breakfast'},
        include: [Item]
    })
    console.log('\n\nMorning:\n', morningmenu.toJSON())

    const afternoonmenu = await Menu.findOne({
        where: 
            {title: 'Afternoon'},
        include: [Item]
    })
    console.log('\n\nAfternoon:\n', afternoonmenu.toJSON())

    const eveningmenu = await Menu.findOne({
        where: 
            {title: 'Evening'},
        include: [Item]
    })
    console.log('\n\nEvening:\n', eveningmenu.toJSON())
}
main()