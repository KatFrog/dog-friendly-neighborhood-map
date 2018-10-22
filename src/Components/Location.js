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
        weather_available: false,
        currentWeather: {
            temp: "pending",
            humidity: "pending ",
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
                this.setState({currentWeather: currentWeather,
                                weather_available: true,});
            })
            .catch((err) => {
                console.log(err);
                this.setState({weather_available: false});

            });

    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        const { location } = this.props;
        const { currentWeather, weather_available } = this.state;
        const initialDisplay = {display: 'none'};
        const imgSource = 'http://openweathermap.org/img/w/' + currentWeather.icon + '.png';
        return (
            <div id={location.name}>
                <span>{location.name}</span>
                <address className="details" style={initialDisplay}>
                    <span className="location-details">
                        {location.address} <br />
                        {location.city}, {location.state}  {location.zip}<br />
                        <a href={location.website.url} target="_blank" rel="noopener noreferrer">{location.website.name}</a>
                    </span>
                </address>
                <label id="weather-label" htmlFor='weather-details' className='aria-hidden'>Current weather data</label>
                <ul className='details' id='weather-details' style={initialDisplay} aria-labelledby='weather-label'>
                    <li className="location-details">
                        {
                            weather_available
                            ? <span>Weather:  <img alt="Weather icon" src={imgSource} /></span>
                            : "Weather information is not available."
                        }
                    </li>
                    <li className="location-details">Current Temp: {currentWeather.temp}</li>
                    <li className="location-details">Current Humidity: {currentWeather.humidity}%</li>
                </ul>
            </div>
        );
    }
}

export default Location;
