import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Locations extends Component {
    render() {
        return (
            <div class='locations-box'>
                <input id='show-locations' class='location-button' type='button' value='Show Locations' />
                <input id='hide-locations' class='location-button' type='button' value='Hide Locations' />
            </div>
        ) // end of return
    } // end of render
} // end of class

export default Locations;
