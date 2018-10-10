import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import store from "./store";

const generateOptions = () => {
    let loc_types = store.getState().loc_type;
    loc_types.forEach((loc) => {
        // create an entry in the options variable
    });
} // end of generateOptions

class App extends Component {
    render() {
        return (
            <div>
                <div class='container'>

                </div>
                <div class='map' id='map'>
                    <Map />;
                </div>
            </div>
        ) // end of return statement
    }  // end of render
} // end of class

export default App;
