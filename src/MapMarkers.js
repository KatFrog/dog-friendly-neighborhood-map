import React, { Component} from 'react';
import { connect } from 'react-redux';
import map from './Map'

let map_makers = [];

const mapStateToProps = (state) => {
    const locations = state.locations;
    return { locations };
};

const create_map_markers = () => {

}; // end of create_map_markers

class MapMarkers extends Component {

};

export default connect(mapStateToProps)(MapMarkers);
