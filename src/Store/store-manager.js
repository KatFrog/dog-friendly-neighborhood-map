export default function storeManager(state, action) {
    let newState = {...state};

    // Common code to filter the list of Locations
    const filterLocations = (filter) => {
        newState.currently_shown = [];
        newState.locations.forEach((loc) => {
            if (!filter || loc.loc_type === filter) {
                newState.currently_shown.push(loc);
            }
        }); // end of forEach
    } // end of filterLocations

    // Main logic in the reducer
    switch (action.type) {
        case "SHOW-RESTAURANT":
            filterLocations("restaurant");
            return newState;
        case "SHOW-PARK":
            filterLocations("park");
            return newState;
        case "SHOW-COFFEE-SHOP":
            filterLocations("coffee-shop");
            return newState;
        case "SHOW-PET-STORE":
            filterLocations("pet-store");
            return newState;
        case "SHOW-DOG-PARK":
            filterLocations("dog-park");
            return(newState);
        case "SHOW-ALL":
            filterLocations("");
            return (newState);
        case "HIDE-ALL":
            filterLocations("--hide--");
            return newState;
        default:
            return state;
    }
}
