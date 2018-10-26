import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
    static propTypes = {
        map: PropTypes.object,
        storeMap: PropTypes.func.isRequired,
    }

    componentDidMount() {
        let newMap = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.005652, lng: -84.478167},
            zoom: 13,
            mapTypeControl: false,
            gestureHandling: 'greedy',
        });
        this.props.storeMap(newMap);
        // During startup, set the map to use the whole screen on a smaller screen
        if (window.screen.width <= 800) {
            document.getElementById('map').classList.add('map-left');
        }
    }

    render() {
        return (
            <div>
                <label id="aria-map-description" htmlFor='map' className='hidden'>Map Application showing dog friendly locations</label>
                <div className='map' id='map' role="region" aria-labelledby="aria-map-description"> </div>
            </div>
        );
    }
} // end of Map class

export default Map;
