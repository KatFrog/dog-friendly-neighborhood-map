import map from './Map';

export default function storeManager(state, action) {
    let newState = {...state};
    let size = Object.keys(newState).length;

    // Common code used to filter map markers
    const filterMapMarker = (filter) => {
        for (let k = 0; k < size; ++k) {
            if ( filter && newState[k].type !== filter) {
                newState[k].setMap(null);
            } else {
                newState[k].setMap(map);
            }
        }
    } // end of filterMapMarker

    // Common code to filter the list of Locations
    const filterLocations = (filter) => {
        newState.currently_shown = [];
        newState.locations.forEach((loc) => {
            if (!filter || loc.loc_type === filter) {
                newState.currently_shown.push(loc);
            }
        }); // end of forEach
    }

    // Main logic in the reducer
    switch (action.type) {
        case "SHOW-RESTAURANT":
            filterMapMarker("restaurant");
            filterLocations("restaurant");
            return newState;
        case "SHOW-PARK":
            filterMapMarker("park");
            filterLocations("park");
            return newState;
        case "SHOW-COFFEE-SHOP":
            filterMapMarker("coffee-shop");
            filterLocations("coffee-shop");
            return newState;
        case "SHOW-STORE":
            filterMapMarker("store");
            filterLocations("store");
            return newState;
        case "SHOW-DOG-PARK":
            filterMapMarker("dog-park");
            filterLocations("dog-park");
            return(newState);
        case "SHOW-ALL":
            filterMapMarker("");
            filterLocations("");
            return (newState);
        case "HIDE-ALL":
            filterMapMarker("--hide--");
            filterLocations("--hide--");
            return newState;
        default:
            return state;
    }
}
