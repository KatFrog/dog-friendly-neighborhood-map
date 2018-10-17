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
            } else {
                this.setState({detailsOpen: false});
            }
            window.setTimeout(() => {
                this.mapMarker.setAnimation(null);
            }, 2000);
            toggleDetails(itemElement);

        });
        getWeatherData(this.props.location.location)
            .then((currentWeather) => {
                this.setState({currentWeather: currentWeather});
            });

    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        const initialDisplay = {display: 'none'};
        const imgSource = 'http://openweathermap.org/img/w/' + this.state.currentWeather.icon + '.png';
        return (
            <div id={this.props.location.name}>
                <span>{this.props.location.name}</span>
                <ul className="details">
                    <li style={initialDisplay}>Address: {this.props.location.address}</li>
                    <li style={initialDisplay}>Currently Open?: Yes! </li>
                    <li style={initialDisplay}><img alt="Weather icon" src={imgSource} /> </li>
                    <li style={initialDisplay}>Current Temp: {this.state.currentWeather.temp}</li>
                    <li style={initialDisplay}>Current Humidity: {this.state.currentWeather.humidity}%</li>
                </ul>
            </div>
        );
    }
}

export default Location;
