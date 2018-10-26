// Opens and populates the info window
const populateInfoWindow = (map, marker, location, infowindow) => {
    if (infowindow.marker !== marker) {
        infowindow.marker = marker;
        infowindow.setContent(`<div>
                                <img src=${location.photo_url} alt="Photo of ${marker.title}" class="location-image">
                                <p style="font-size: 16px;">${marker.title}</p>
                                <p>${location.address}</p>
                                <p>${location.city}, ${location.zip}</p>
                                <p>${location.description}</p></div>`);
        infowindow.open(map, marker);
        // Close the window if the marker is clicked again
        infowindow.addListener('closeclick', () => {
            infowindow.marker = null;
            infowindow.setContent(null);
        });
    }
}

// Creates and returns a map marker associated with the location parameter
export const create_map_marker = (location, map) => {
    const HIGHLIGHT_ICON = 'icons/pink-star-face.png';
    const MAX_Z_INDEX = 110;
    let largeInfoWindow = new window.google.maps.InfoWindow({maxWidth: 220});
    let defaultIcon;
    let zIndex = location.dfr * 10;
    let position = location.location;
    let name = location.name;
    switch (location.dfr) {
        case "10":
            defaultIcon = 'icons/purple-paw.png';
        break;
        case "9":
        case "8":
            defaultIcon = 'icons/yellow-paw.png';
            break;
        case "7":
        case "6":
            defaultIcon = 'icons/green-paw.png';
            break;
        default:
            defaultIcon = 'icons/blue-paw.png';
    }

    let marker = new window.google.maps.Marker({
        position: position,
        title: name,
        animation: window.google.maps.Animation.DROP,
        icon: defaultIcon,
        map: map,
        optimized: false,
        zIndex: zIndex,
    });
    // Pop up an info Window when a marker is clicked
    marker.addListener('click', function() {
        populateInfoWindow(map, this, location, largeInfoWindow);
    });
    // Change the marker icon when mousing over
    marker.addListener('mouseover', function() {
        marker.zIndex = MAX_Z_INDEX;
        marker.setIcon(HIGHLIGHT_ICON);
    });
    // Change the marker back after moving mouse away
    marker.addListener('mouseout', function() {
        marker.zIndex = location.dfr * 10;
        marker.setIcon(defaultIcon);
    });
    return marker;
}
