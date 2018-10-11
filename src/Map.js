import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state, new_map) => {
    new_map = state.neighborhood_map;
    return { new_map };
};

function loadError(oError) {
    throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function loadScript(url, callback) {
    let new_script = document.createElement('script');
    new_script.onerror = loadError;
    new_script.src = url;
    if (callback) { new_script.onload = callback }
    document.head.appendChild(new_script);
}



function initMap()  {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: map_center,
        zoom: map_zoom,
        mapTypeControl: map_mapTypeControl,
    }); // end of map declaration
}

export let map;
let map_center, map_zoom, map_mapTypeControl;

class Map extends Component {
    static propTypes = {
        new_map: PropTypes.object.isRequired
    }
    map_center = this.props.new_map.center;
    map_zoom = this.props.new_map.zoom;
    map_mapTypeControl = this.props.new_map.mapTypeControl;
    render() {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCwPPGGECvHvZZs8Y7KSgyAjxm2fRF5C6g&libraries=geometry&v=3", initMap);
        //document.getElementById('map').append(this.map);
        return (
            <div className='map' id='map'>
            </div>
        );
    }
} // end of Map class

export default connect(mapStateToProps)(Map);
