import React, { Component } from 'react';
import Map from './Map';
import './App.css';

// const generateOptions = () => {
//     let loc_types = store.getState().loc_type;
//     loc_types.forEach((loc) => {
//         // create an entry in the options variable
//     });
// } // end of generateOptions

class App extends Component {
    render() {
        return (
            <div>
                <div className='container' id="loc_container">

                </div>

                    <Map />;
            </div>
        ); // end of return statement
    }  // end of render
} // end of App

export default App;
