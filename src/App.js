import React, { Component } from 'react';
import Map from './Components/Map';
import LocationFilters from './Components/LocationFilters';
import CurrentList from './Components/CurrentList';
import scriptLoader from 'react-async-script-loader';
import MilkboneMenu, { toggleSidebar } from './Components/MilkboneMenu';
// import PropTypes from 'prop-types';
import './App.css';

const GOOGLE_MAPS_URL = process.env.REACT_APP_GOOGLE_MAPS_URL + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class App extends Component {
    // static propTypes = {
    //     authSuccess: PropTypes.boolean.isRequired,
    // }

    componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed && this.props.authSuccess) {
                this.setState({googleAPIReady: true});
            } else {
                this.setState({googleAPIError: true});
            }
        }
    }

    componentDidMount () {
        document.getElementById('milkboneMenu').addEventListener('click', () => {
            toggleSidebar()
        });
        document.getElementById('milkboneMenu').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                toggleSidebar();
            }
        });
        // Hide the sidebar on a smaller screen
        if (window.screen.width < 800) {
            document.getElementById('sidebar').classList.add('hidden');
        }
    }

    state = {
        googleAPIReady: false,
        googleAPIError: false,
        map: undefined,
    }

    storeMap = (new_map) => {
        this.setState({map: new_map});
    }

    render() {
        return (
                <div role="main">
                    <MilkboneMenu />
                    <div className="sidebar" id='sidebar'>
                        <LocationFilters />
                        {this.state.map && <CurrentList
                            map={this.state.map}
                        />}
                    </div>
                    <div id="mapDiv">
                        {this.state.googleAPIReady && <Map
                            map={this.state.map}
                            storeMap={this.storeMap}
                        />}
                        {(this.state.googleAPIError) && <p className="error-message">Google Maps is temporarily not available.  Please try again later.</p>}
                    </div>
                </div>
        );
    }
}

export default scriptLoader([GOOGLE_MAPS_URL])(App);
