import React, { Component } from 'react';
import Map from './Components/Map';
import LocationFilters from './Components/LocationFilters';
import CurrentList from './Components/CurrentList';
import scriptLoader from 'react-async-script-loader';
import './App.css';

const GOOGLE_MAPS_URL = process.env.REACT_APP_GOOGLE_MAPS_URL + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class App extends Component {

    componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.setState({googleAPIReady: true});
            }
        }
    }

    state = {
        googleAPIReady: false,
        map: undefined,
    }

    mapLoaded = () => {

    }

    storeMap = (new_map) => {
        this.setState({map: new_map});
    }

    render() {
        return (
                <div>
                    <span>☰</span>
                    <div className="location-list-container">
                        <LocationFilters />
                        {this.state.map && <CurrentList
                            map={this.state.map}
                        />}
                    </div>
                    {this.state.googleAPIReady && <Map
                        map={this.state.map}
                        storeMap={this.storeMap}
                    />}
                </div>
        );
    }
}

export default scriptLoader([GOOGLE_MAPS_URL])(App);
