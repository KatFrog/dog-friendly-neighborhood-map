
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
            infowindow.close();
        });
    }
}

export const create_map_marker = (location, map) => {
    let largeInfoWindow = new window.google.maps.InfoWindow({maxWidth: 220});
    let iconColor;
    const maxZIndex = 110;
    switch (location.dfr) {
        case "10":
            iconColor = 'icons/purple-paw.png';
        break;
        case "9":
        case "8":
            iconColor = 'icons/yellow-paw.png';
            break;
        case "7":
        case "6":
            iconColor = 'icons/green-paw.png';
            break;
        default:
            iconColor = 'icons/blue-paw.png';
    }
    let zIndex = location.dfr * 10;
    let defaultIcon = iconColor;
    let highlightIcon = 'icons/pink-star-face.png';
    let position = location.location;
    let name = location.name;
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
        marker.zIndex = maxZIndex;
        marker.setIcon(highlightIcon);
    });
    // Change the marker back after moving mouse away
    marker.addListener('mouseout', function() {
        marker.zIndex = location.dfr * 10;
        marker.setIcon(defaultIcon);
    });
    return marker;
} // end of create_map_markers
