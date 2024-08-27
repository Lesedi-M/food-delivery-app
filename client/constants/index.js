export const catergoris = [
    {
        id:1,
        name: 'Pizza',
        image: require('../assets/categories/c2.png')
    },
    {
        id:2,
        name: 'Burger',
        image: require('../assets/categories/c1.png')
    },
    {
        id:3,
        name: 'Fast Food',
        image: require('../assets/categories/c3.png')
    },
    {
        id:4,
        name: 'Pizza',
        image: require('../assets/categories/c3.png')
    },
    {
        id:5,
        name: 'Pizza',
        image: require('../assets/categories/c5.png')
    }
]

export const featured = {
    id:1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
        {
            id:1,
            name: "Tashas",
            image: require('../assets/restaurants/r2.webp'),
            description: 'Hot and spicey',
            lng: 28.041676121792733,
            lat:-26.14610024270906,
            address:'Sandton City',
            stars:4,
            reviews:'4.4k',
            category:'restuarant',
            dishes: [
                {
                    id:1,
                    name: 'Cheese garlic pizza',
                    description: 'Cheese and garlic',
                    price:100,
                    image: require('../assets/dishes/d1.jpeg')
                },
                {
                    id:2,
                    name: 'Neapolitan pizza',
                    description: 'Hailing from Naples, Italy, Neapolitan pizza is characterized by its thin, soft, and chewy crust. Toppings are kept minimal, typically ...',
                    price:100,
                    image: require('../assets/dishes/d1.jpeg')
                },
                {
                    id:3,
                    name: 'Greek pizza',
                    description: 'Greek Pizza. Created by Greek immigrants who tried Italian pizza in America, Greek pizza has a thick, chewy crust and is popular in the New England states ...',
                    price:100,
                    image: require('../assets/dishes/d1.jpeg')
                },
            ]
        },
        {
            id:2,
            name: "Spur",
            image: require('../assets/restaurants/r2.webp'),
            description: 'Hot and spicey',
            lng: 28.041676121792733,
            lat:-26.14610024270906,
            address:'Mall of Africa',
            stars:4,
            reviews:'4.4k',
            category:'restuarant',
            dishes: [
                {
                    id:1,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d1.jpeg')
                },
                {
                    id:2,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d2.jpeg')
                },
                {
                    id:3,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d3.jpeg')
                },
            ]
        },
        {
            id:3,
            name: "Wimpy",
            image: require('../assets/restaurants/r3.jpeg'),
            description: 'Hot and spicey',
            lng: 28.041676121792733,
            lat:-26.14610024270906,
            address:'Rosebank Mall',
            stars:4,
            reviews:'4.4k',
            category:'restuarant',
            dishes: [
                {
                    id:1,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d5.jpeg')
                },
                {
                    id:2,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d6.jpeg')
                },
                {
                    id:3,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d7.jpeg')
                },
            ]
        },
        {
            id:4,
            name: "KFC",
            image: require('../assets/restaurants/r5.jpg'),
            description: 'Hot and spicey',
            lng: 28.041676121792733,
            lat:-26.14610024270906,
            address:'Rosebank Mall',
            stars:4,
            reviews:'4.4k',
            category:'Fast Food',
            dishes: [
                {
                    id:1,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d9.jpeg')
                },
                {
                    id:2,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d10.jpeg')
                },
                {
                    id:3,
                    name: 'Pizza',
                    description: 'chease garlic pizza',
                    price:10,
                    image: require('../assets/dishes/d11.jpeg')
                },
            ]
        }
    ]
}