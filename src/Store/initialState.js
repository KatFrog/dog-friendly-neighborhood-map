const initialState =  {
    locations: [
        {
            place_id: '0',
            name: "Bruester's Ice Cream",
            location: {
                lat: 34.0424023,
                lng: -84.48212559999999,
            },
            loc_type: 'restaurant', // from list location_type
            address: '3735 Trickum Road', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            website:
                {
                    url: 'https://brusters.com/mariettaga',
                    name: 'www.brusters.com'
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipMU8zmimkxNSvCJIBxeJcPgicEKK0sDUz3WVOTM',
            dfr: '6', // Dog Friendly Rating, from 0 - 10
            description: "An ice cream stand with outdoor seating,"
                            + " Bruester's gives dogs a free"
                            + " doggie ice cream cup.",
        },
        {
            place_id: '1',
            name: "Capozzi's Pizza",
            location: {
                lat:34.0339151342653,
                lng:-84.4654279080833,
            },
            loc_type: 'restaurant', // from location_type
            address: '2960 Shallowford Rd, #101', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            website:
                {
                    url: 'http://www.capozzissandyplains.com/',
                    name: 'www.capozzissandyplains.com',
                },
            photo_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/aBf6n_xjcn19v-PRn2wc3A/180s.jpg',
            dfr: '7', // Dog Friendly Rating, from 0 - 10
            description: "Capozzi's has outdoor seating where they allow dogs.  "
                         + "The employees will come outside to take your order  "
                         + "if you have a dog, even during hours when you usually "
                         + "order at the counter.",
        },
        {
            place_id: '2',
            name: "Cool Beans Coffee Roasters",
            location: {
                lat: 33.9531211853027,
                lng:-84.5508575439453,
            },
            loc_type: 'coffee-shop', // from location_type
            address: '31 Mill St.', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30060',
            website:
                {
                    url: 'http://coolbeanscoffeeroasters.com/',
                    name: 'www.coolbeanscoffeeroasters.com',
                },
            photo_url: 'https://c1.staticflickr.com/4/3785/9582114727_582892bdb0_z.jpg',
            dfr: '10', // Dog Friendly Rating, from 0 - 10
            description: "Dogs are welcome inside and outside here. "
                            + "They even provide a water bowl for dogs outside.",
        },
        {
            place_id: '3',
            name: "East Cobb Park",
            location: {
                lat: 33.9791938,
                lng: -84.4558313,
            },
            loc_type: 'park', // from location_type
            address: '3322 Roswell Road', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30068',
            website:
                {
                    url: 'http://www.eastcobbpark.org',
                    name: 'www.eastcobbpark.org',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipPvmIIXlzeNvbR4bDIxZbl4TUf7kUG_VBMZqPO0',
            dfr: '9', // Dog Friendly Rating, from 0 - 10
            description: "A large outdoor park with a field for playing fetch, "
                            + "several walking trails, and dog poop stations.  "
                            + "Please nice bathrooms and a water fountains.",
        },
        {
            place_id: '4',
            name: "Leita Thompson Memorial Park",
            location: {
                lat: 34.063749,
                lng: -84.408351,
            },
            loc_type: 'park', // from list location_type
            address: '1200 Woodstock Road', // Street level address
            city: 'Roswell',
            state: "GA",
            zip: '30075',
            website:
                {
                    url: 'https://www.roswellgov.com/Home/Components/FacilityDirectory/FacilityDirectory/17/1944',
                    name: 'www.roswellgov.com',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipPXxlCss7lEKPX16OB-kpVbXYnIVluV0NVGC1A0',
            dfr: '8', // Dog Friendly Rating, from 0 - 10
            description: "A wonderful park and dog park, with paths cut "
                            + "through forest for walking.  The dog park has "
                            + "two areas for off-leash running, one for small "
                            + "dogs and one for large dogs.  There is a nice "
                            + "memorial for Leita Thompson next to the trails "
                            + "with comfortable seating and a fountain.",
        },
        {
            place_id: '5',
            name: "Marietta Pizza Company",
            location: {
                lat: 33.952105,
                lng: -84.550415,
            },
            loc_type: 'restaurant', // from list location_type
            address: '3 Whitlock Av. SW', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30064',
            website:
                {
                    url: 'http://mariettapizza.com',
                    name: 'www.mariettapizza.com',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipMCxD-XSSXAfyrZDs3uzsXU6Pzeaih8pXOGxg-V',
            dfr: '5', // Dog Friendly Rating, from 0 - 10
            description: "Outdoor seating with umbrellas, the wait staff "
                            + "happily bring water out for dogs.  The only "
                            + "drawback is the noise from the street and "
                            + "the occasionally train passing by.",
        },
        {
            place_id: '6',
            name: "Pet Supplies Plus",
            location: {
                lat: 34.034636,
                lng:-84.466150,
            },
            loc_type: 'pet-store', // from  location_type
            address: '2960 Shallowford Road, Suite 114-B', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            website:
                {
                    url: 'https://www.petsuppliesplus.com/Store/GA/Marietta/Marietta/8041',
                    name: 'www.petsuppliesplus.com',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipPDkGxO9LicFqy-2esEsqkaQ1tpqefehYHVesDU',
            dfr: '9', // Dog Friendly Rating, from 0 - 10
            description: "A lovely pet store with incredibly friendly employees"
                            + " and free dog treats at the registers.",
        },
        {
            place_id: '7',
            name: "Starbucks (Sandy Plains)",
            location: {
                lat: 34.0395882,
                lng: -84.4600287,
            },
            loc_type: 'coffee-shop', // from list location_type
            address: '3631 Sandy Plains Road', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            website:
                {
                    url: 'https://www.starbucks.com/store-locator/store/1015648/sandy-plains-gordy-3631-sandy-plains-rd-marietta-ga-30066-us',
                    name: 'www.starbucks.com',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipOuBYX38l4ArE6ZQYO91ZEbN-Dn9rZSL2lAtCB6',
            dfr: '8', // Dog Friendly Rating, from 0 - 10
            description: "Starbucks allows dogs in their outdoor seating "
                            + " area.  Plus they give out free Puppacinos "
                            + " to any dogs who wants one.  (It's a cup "
                            + "full of whipped cream)",
        },
        {
            place_id: '8',
            name: "Starbucks (Hwy. 92)",
            location: {
                lat: 34.0626564,
                lng: -84.4203971,
            },
            loc_type: 'coffee-shop', // from list location_type
            address: '4646 Woodstock Road Suite 100', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30075',
            website:
                {
                    url: 'https://www.starbucks.com/store-locator/store/6613/hwy-92-mabry-rd-4646-woodstock-rd-roswell-ga-300751677-us',
                    name: 'www.starbucks.com',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipMAaFmrdb6ZIuQbApcdxA3r4sXGtyZixapCw7Gq',
            dfr: '8', // Dog Friendly Rating, from 0 - 10
            description: "Starbucks allows dogs in their outdoor seating "
                            + " area.  Plus they give out free Puppacinos "
                            + " to any dogs who wants one.  (It's a cup "
                            + "full of whipped cream)",
        },
        {
            place_id: '9',
            name: "Sweat Mountain Dog Park",
            location: {
                lat: 34.056457,
                lng: -84.47595690000001,
            },
            loc_type: 'dog-park', // from location_type
            address: '4346 Steinhauer Road', // Street level address
            city: 'Marietta',
            state: "GA",
            zip: '30066',
            website:
                {
                    url: 'https://cobbcounty.org/index.php?option=com_content&view=article&id=79&catid=9&Itemid=2799',
                    name: 'www.cobbcounty.org',
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipPU6cPyeEtKjhBoZJiBV94sVMBHGAhTdpwL_Rlp',
            dfr: '10', // Dog Friendly Rating, from 0 - 10
            description: "A lovely dog park with separate areas for small and "
                            + "large dogs, a plethora of dog poop stations, "
                            + "and water fountains for the dogs.",
        },
        {
            place_id: '10',
            name: "Woofstock Dog Park",
            location: {
                lat: 34.097354,
                lng: -84.529531,
            },
            loc_type: 'dog-park', // from location_type
            address: '150 Dupree Road', // Street level address
            city: 'Woodstock',
            state: "GA",
            zip: '30188',
            website:
                {
                    url: 'https://www.woodstockga.gov/773/Woofstock-Park',
                    name: 'www.woodstockga.gov'
                },
            photo_url: 'https://lh3.ggpht.com/p/AF1QipMM3Cym1S8rbD7O-n7H9QygMLs-tPrxG4b-HYBd',
            dfr: '10', // Dog Friendly Rating, from 0 - 10
            description: "The dog park itself is beautiful, with large, "
                            + "separate ares for small and large dogs.  There "
                            + "is also play equipment for the dogs, such as "
                            + "a ramp for running across.  The dog park also "
                            + "serves as a trail head for the Noonday Creek "
                            + "trail.  The trail is smooth and paved, and you "
                            + "can walk either to downtown Woodstock or towards "
                            + "Highway 92.",
        },
    ],
    currently_shown: [],
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
        {value: 'SHOW-WALKING-TRAIL',
        label: 'Walking Trail',
        },
    ],

    // neighborhood_map: {
    //     center: {lat: 34.005652, lng: -84.478167},
    //     zoom: 13,
    //     mapTypeControl: false,
    // },
}

//Show all locations as a default for when the app starts
initialState.currently_shown = initialState.locations;

export default initialState;
