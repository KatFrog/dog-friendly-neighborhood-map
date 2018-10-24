import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { create_map_marker } from './MapMarker';
import { toggleDetails, getWeatherData } from './LocationInterface';

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
        weatherAvailable: false,
        currentWeather: {
            temp: "pending",
            humidity: "pending ",
            icon: '',
        },
    }

    toggleLocation = (itemElement) => {
        if (!this.state.detailsOpen) {
            this.mapMarker.setAnimation(window.google.maps.Animation.BOUNCE);
            this.setState({detailsOpen: true});
            this.props.map.panTo(this.mapMarker.position);
            this.props.map.setZoom(15);
            this.mapMarker.zIndex = 110;
        } else {
            this.setState({detailsOpen: false});
            this.props.map.setZoom(12);
            this.mapMarker.zIndex = this.props.location.dfr * 10;
        }
        window.setTimeout(() => {
            this.mapMarker.setAnimation(null);
        }, 2000);
        toggleDetails(itemElement);
    }

    componentDidMount() {
        this.mapMarker = create_map_marker(this.props.location, this.props.map);
        let itemElement = document.getElementById(this.props.location.name);
        // On click event listener to show/close location details and bounce map marker
        itemElement.addEventListener('click', () => {
            this.toggleLocation(itemElement);
        });
        // Enter key event listener to show/close location details and bounce map marker
        itemElement.addEventListener('keydown', (k) => {
            if (k.keyCode === 13) {
                this.toggleLocation(itemElement);
            }
        });

        this.props.bounds.extend(this.mapMarker.position);
        getWeatherData(this.props.location.location)
            .then((currentWeather) => {
                this.setState({currentWeather: currentWeather,
                                weatherAvailable: true,});
            })
            .catch((err) => {
                console.log(err);
                this.setState({weatherAvailable: false});

            });

    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        const { location } = this.props;
        const { currentWeather, weatherAvailable } = this.state;
        const imgSource = 'http://openweathermap.org/img/w/' + currentWeather.icon + '.png';
        return (
            <div id={location.name} className="location">
                <span role='listitem' tabIndex='0'>{location.name}</span>
                <div className="details hidden">
                    <address tabIndex='0'>
                        <span className="location-details">
                            {location.address} <br />
                            {location.city}, {location.state}  {location.zip}<br />
                            <a href={location.website.url} target="_blank" rel="noopener noreferrer">{location.website.name}</a>
                        </span>
                    </address>
                    <label id="weather-label" htmlFor='weather-details' className='hidden'>Current weather data</label>
                    <ul className='weather' id='weather-details' aria-labelledby='weather-label'>
                        <li className="location-details" tabIndex='0'>
                            {
                                weatherAvailable
                                ? <span>Weather:  <img alt="Weather icon" src={imgSource} /></span>
                                : "Weather information is not available."
                            }
                        </li>
                        <li className="location-details" tabIndex='0'>Current Temp: {currentWeather.temp}</li>
                        <li className="location-details" tabIndex='0'>Current Humidity: {currentWeather.humidity}%</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Location;
