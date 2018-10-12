const initialState =  {
    locations: [
        {
            name: "Capozzi's Pizza",
            place_id: 'ChIJMa6s5zNt9YgRzVyt5eyonhE',
            location: {
                lat:34.0339313,
                lng:-84.4656767,
            },
            loc_type: 'restaurant', // from list: coffee-shop, store, restaurant, park, dog-park
            address: '2960 Shallowford Rd, #101', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            dfr: '7', // Dog Friendly Rating, from 0 - 10
            description: "Capozzi's has outdoor seating where they allow dogs.  "
                         + "The employees will come outside to take your order  "
                         + "if you have a dog, even during hours when you usually "
                         + "order at the counter.",
        },
        {
            name: "Cool Beans Coffee Roasters",
            place_id: 'ChIJqyMC4yQU9YgRGt8e9w6p7BE',
            location: {
                lat:33-9531598,
                lng:-84.5507611,
            },
            loc_type: 'coffee-shop', // from list: coffee-shop, store, restaurant, park, dog-park
            address: '31 Mill St.', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30060',
            dfr: '10', // Dog Friendly Rating, from 0 - 10
            description: "Dogs are welcome inside and outside here. "
                            + "They even provide a water bowl for dogs outside.",
        },
    ],
    loc_type: [
        {value: 'SHOW-RESTAURANT',
        label: "Restaurant",
        },
        {value: 'SHOW-DOG-PARK',
        label: "Dog Park",
        },
        {value: 'SHOW-PARK',
        label: "Park",
        },
        {value: 'SHOW-PET-STORE',
        label: "Pet Store",
        },
        {value: 'SHOW-COFFEE-SHOP',
        label: "Coffee Shop",
        },
    ],
    currently_shown: [],
    neighborhood_map: {
        center: {lat: 34.005652, lng: -84.478167},
        zoom: 13,
        mapTypeControl: false,
    },
}

//Show all locations as a default for when the app starts
initialState.currently_shown = initialState.locations;

export default initialState;
