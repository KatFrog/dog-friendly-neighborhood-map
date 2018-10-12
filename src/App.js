import React, { Component } from 'react';
import Map from './Components/Map';
import LocationList from './Components/LocationList';
import CurrentList from './Components/CurrentList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <LocationList />
                <CurrentList />
                <Map />
            </div>
        ); // end of return statement
    }  // end of render
} // end of App

export default App;
