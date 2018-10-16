import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { create_map_marker } from './MapMarker';
import { toggleDetails, getDetailsFromYelp } from './Interface';

class Location extends Component {
    constructor() {
        super();
        this.mapMarker = undefined;
        this.location_details = undefined;
    }
    static propTypes = {
        location: PropTypes.object.isRequired,
        map: PropTypes.object.isRequired,
    }

    state = {
        detailsOpen: false,
    }

    componentDidMount() {
        this.mapMarker = create_map_marker(this.props.location, this.props.map);
        let itemElement = document.getElementById(this.props.location.name);
        itemElement.addEventListener('click', () => {
            if (!this.state.detailsOpen) {
                this.mapMarker.setAnimation(window.google.maps.Animation.BOUNCE);
                this.setState({detailsOpen: true});
            } else {
                this.setState({detailsOpen: false});
            }
            window.setTimeout(() => {
                this.mapMarker.setAnimation(null);
            }, 2000);
            toggleDetails(itemElement);

        });
    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        const initialDisplay = {display: 'none'};
        this.location_details = getDetailsFromYelp(this.props.location.yelp_id);
        return (
            <div id={this.props.location.name}>
                <span>{this.props.location.name}</span>
                <ul className="details">
                    <li style={initialDisplay}>Address: {this.props.location.address}</li>
                    <li style={initialDisplay}>Open Hours: </li>
                </ul>
            </div>
        );
    }
}

export default Location;
