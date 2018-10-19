import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { create_map_marker } from './MapMarker';
import { toggleDetails, getWeatherData } from './Interface';

class Location extends Component {
    constructor() {
        super();
        this.mapMarker = undefined;
        this.location_details = undefined;
    }
    static propTypes = {
        bounds: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        map: PropTypes.object.isRequired,
    }

    state = {
        detailsOpen: false,
        currentWeather: {
            temp: "pending",
            humidity: "pending",
            icon: '',
        },
    }

    componentDidMount() {
        this.mapMarker = create_map_marker(this.props.location, this.props.map);
        let itemElement = document.getElementById(this.props.location.name);
        itemElement.addEventListener('click', () => {
            if (!this.state.detailsOpen) {
                this.mapMarker.setAnimation(window.google.maps.Animation.BOUNCE);
                this.setState({detailsOpen: true});
                this.props.map.panTo(this.mapMarker.position);
                this.props.map.setZoom(15);
            } else {
                this.setState({detailsOpen: false});
                this.props.map.setZoom(12);
            }
            window.setTimeout(() => {
                this.mapMarker.setAnimation(null);
            }, 2000);
            toggleDetails(itemElement);

        });
        this.props.bounds.extend(this.mapMarker.position);
        getWeatherData(this.props.location.location)
            .then((currentWeather) => {
                this.setState({currentWeather: currentWeather});
            });

    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        const { location } = this.props;
        const { currentWeather } = this.state;
        const initialDisplay = {display: 'none'};
        const imgSource = 'http://openweathermap.org/img/w/' + currentWeather.icon + '.png';
        return (
            <div id={location.name}>
                <span>{location.name}</span>
                <ul className="details">
                    <li style={initialDisplay} className="location-details">{location.address}</li>
                    <li style={initialDisplay} className="location-details">{location.city}, {location.state}  {location.zip}</li>
                    <li style={initialDisplay} className="location-details"><a href={location.website} target="_blank" rel="noopener noreferrer">{location.website}</a></li>
                    <li style={initialDisplay} className="location-details"><img alt="Weather icon" src={imgSource} /> </li>
                    <li style={initialDisplay} className="location-details">Current Temp: {currentWeather.temp}</li>
                    <li style={initialDisplay} className="location-details">Current Humidity: {currentWeather.humidity}%</li>
                </ul>
            </div>
        );
    }
}

export default Location;
