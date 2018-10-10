import React, { Component} from 'react';
import { connect } from 'react-redux';

let map;
let map_makers = [];

const create_map_markers = () => {

} // end of create_map_markers

const mapStateToProps = (state) => {
    const new_map = state.neighborhood_map;
    return { new_map };
};

class Map extends Component {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCwPPGGECvHvZZs8Y7KSgyAjxm2fRF5C6g&libraries=geometry&v=3&callback=initMap");
    map = new google.maps.Map(document.getElementById('map'), {
        center: new_map.center,
        zoom: new_map.zoom,
        mapTypeControl: new_map.mapTypeControl,
    }); // end of map declaration

    render() {
            return ;
    }
} // end of Map class

export default connect(mapStateToProps)(Map);
