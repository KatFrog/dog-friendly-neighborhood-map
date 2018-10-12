import React, { Component} from 'react';

function loadError(oError) {
    throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function loadScript(url, callback) {
    let new_script = document.createElement('script');
    new_script.onerror = loadError;
    new_script.src = url;
    if (callback) { new_script.onload = callback }
    document.head.appendChild(new_script);
} // end of loadScript

function initMap()  {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.005652, lng: -84.478167},
        zoom: 13,
        mapTypeControl: false,
    }); // end of initMap
}

class Map extends Component {
    render() {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCwPPGGECvHvZZs8Y7KSgyAjxm2fRF5C6g&libraries=geometry&v=3", initMap);
        //document.getElementById('map').append(this.map);
        return (
            <div className='map' id='map'>
            </div>
        );
    }
} // end of Map class

export default Map;
