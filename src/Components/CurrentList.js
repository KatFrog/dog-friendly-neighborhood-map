import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './Location';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    const currentList = state.currently_shown;
    return { currentList };
}


class CurrentList extends Component {
    constructor() {
        super();
        this.bounds = new window.google.maps.LatLngBounds();
    }

    static propTypes = {
        currentList: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    render() {
        return (
            <div className="selected-locations">
                <ol className="current-list">
                    {this.props.currentList.map((location) => {
                        return (
                            <li key={location.place_id}>
                                <Location
                                    bounds={this.bounds}
                                    location={location}
                                    map={this.props.map}
                                />
                            </li>);
                        })
                    }
                </ol>
                {this.props.map.fitBounds(this.bounds)}
                <p className="attribution">Weather data provided by
                <a href="https://www.openweathermap.org" target="_blank"
                rel="noopener noreferrer">OpenWeatherMap</a>. </p>
            </div>
        );
    }
}


export default connect(mapStateToProps)(CurrentList);
