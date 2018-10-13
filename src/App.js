import React, { Component } from 'react';
import Map from './Components/Map';
import LocationList from './Components/LocationList';
import CurrentList from './Components/CurrentList';
import './App.css';

class App extends Component {
    state = {
        map: undefined,
    }

    setMap = (new_map) => {
        this.setState({map: new_map});
    }

    render() {
        return (
            <div>
                <LocationList />
                <CurrentList
                    map={this.state.map}
                />
                <Map
                    map={this.state.map}
                    setMap={this.setMap}
                />
            </div>
        ); // end of return statement
    }  // end of render
} // end of App

export default App;
