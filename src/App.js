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

    componentDidMount () {
        document.getElementById('milkboneMenu').addEventListener('click', (e) => {
            this.toggleSidebar()
        });
    }

    state = {
        googleAPIReady: false,
        map: undefined,
        sidebarShowing: true,
    }

    storeMap = (new_map) => {
        this.setState({map: new_map});
    }

    toggleSidebar = () => {
        let mapElements = document.getElementsByClassName('map');
        let sidebarElements = document.getElementsByClassName('sidebar');
        if (sidebarElements[0].style.display  === 'none') {
            sidebarElements[0].style.display = 'block';
            mapElements[0].style.left = '300px';
        } else {
            sidebarElements[0].style.display = 'none';
            mapElements[0].style.left = '0';
        }
    }

    render() {
        return (
                <div role="main">
                    <span id='milkboneMenu' className='milkbone-menu'>☰</span>
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
                    </div>
                </div>
        );
    }
}

export default scriptLoader([GOOGLE_MAPS_URL])(App);
