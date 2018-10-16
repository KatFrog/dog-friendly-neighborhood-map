const initialState =  {
    locations: [
        {
            name: "Capozzi's Pizza",
            place_id: 'ChIJMa6s5zNt9YgRzVyt5eyonhE',
            yelp_id: "QVxuVa_uOsWLyCKQsxvy0Q",
            location: {
                lat:34.0339151342653,
                lng:-84.4654279080833,
            },
            loc_type: 'restaurant', // from list: coffee-shop, store, restaurant, park, dog-park
            address: '2960 Shallowford Rd, #101', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            photo_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/aBf6n_xjcn19v-PRn2wc3A/180s.jpg',
            dfr: '7', // Dog Friendly Rating, from 0 - 10
            description: "Capozzi's has outdoor seating where they allow dogs.  "
                         + "The employees will come outside to take your order  "
                         + "if you have a dog, even during hours when you usually "
                         + "order at the counter.",
        },
        {
            name: "Cool Beans Coffee Roasters",
            place_id: 'ChIJqyMC4yQU9YgRGt8e9w6p7BE',
            yelp_id: 'FA2aqGbhP2VO9e_fEyRgoA',
            location: {
                lat: 33.9531211853027,
                lng:-84.5508575439453,
            },
            loc_type: 'coffee-shop', // from list: coffee-shop, store, restaurant, park, dog-park
            address: '31 Mill St.', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30060',
            photo_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/n4dLc3bNyDMrRzeiW2MeCg/o.jpg',
            dfr: '10', // Dog Friendly Rating, from 0 - 10
            description: "Dogs are welcome inside and outside here. "
                            + "They even provide a water bowl for dogs outside.",
        },
    ],
    location_type: [
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

    // neighborhood_map: {
    //     center: {lat: 34.005652, lng: -84.478167},
    //     zoom: 13,
    //     mapTypeControl: false,
    // },
}

//Show all locations as a default for when the app starts
initialState.currently_shown = initialState.locations;

export default initialState;
