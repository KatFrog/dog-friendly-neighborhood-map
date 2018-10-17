
// Creates a marker icon of the specified color
const makeMarkerIcon = (marker_color) => {
    let markerImage = {
        url: `http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|${marker_color}|40|_|%E2%80%A2`,
        size: new window.google.maps.Size(60, 60),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(22, 65),
    };
    return markerImage;
}

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
    let defaultIcon = makeMarkerIcon('0091ff');
    let highlightIcon = makeMarkerIcon('9932CC');
    let position = location.location;
    let name = location.name;
    let marker = new window.google.maps.Marker({
        position: position,
        title: name,
        animation: window.google.maps.Animation.DROP,
        icon: defaultIcon,
        map: map,
    });
    // Pop up an info Window when a marker is clicked
    marker.addListener('click', function() {
        populateInfoWindow(map, this, location, largeInfoWindow);
    });
    // Change the marker icon when mousing over
    marker.addListener('mouseover', function() {
        marker.setIcon(highlightIcon);
    });
    // Change the marker back after moving mouse away
    marker.addListener('mouseout', function() {
        marker.setIcon(defaultIcon);
    });
    return marker;
} // end of create_map_markers
