import React, { Component } from 'react';
import Map from './Map';
import Locations from './Locations'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div class='container'>
                    <Locations />
                </div>
                <div class='map' id='map'>
                    <Map />;
                </div>
            </div>
        ) // end of return statement
    }  // end of render
} // end of class

export default App;
