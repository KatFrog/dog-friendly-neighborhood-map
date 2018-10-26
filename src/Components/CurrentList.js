import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './Location';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    const CURRENT_LIST = state.currently_shown;
    return { CURRENT_LIST };
}

class CURRENT_LIST extends Component {
    constructor() {
        super();
        this.bounds = new window.google.maps.LatLngBounds();
    }

    static propTypes = {
        CURRENT_LIST: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    render() {
        return (
            <div>
                <div className="selected-locations">
                    <label id='curent-list-label' className='hidden'>Current list of locations</label>
                    <ol className="current-list" role='group' aria-labelledby='current-list-label'>
                        {this.props.CURRENT_LIST.map((location) => {
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
                </div>
                {this.props.map.fitBounds(this.bounds)}
                <footer className="attribution" role="contentinfo">Weather data
                 provided by <a href="https://www.openweathermap.org" target="_blank"
                rel="noopener noreferrer">OpenWeatherMap</a>. </footer>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CURRENT_LIST);
