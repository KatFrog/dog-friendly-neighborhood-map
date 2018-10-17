import React, { Component } from 'react';
import Map from './Components/Map';
import LocationFilters from './Components/LocationFilters';
import CurrentList from './Components/CurrentList';
import './App.css';

class App extends Component {
    state = {
        map: undefined,
    }

    storeMap = (new_map) => {
        this.setState({map: new_map});
    }

    render() {
        return (
            <div>
                <LocationFilters />
                {this.state.map && <CurrentList
                    map={this.state.map}
                />}
                <Map
                    map={this.state.map}
                    storeMap={this.storeMap}
                />
            </div>
        ); // end of return statement
    }  // end of render
} // end of App

export default App;
