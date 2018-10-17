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
        });
        this.props.storeMap(newMap);
    }

    render() {
        return (
            <div>
                <div className='map' id='map'> </div>
            </div>
        );
    }
} // end of Map class

export default Map;
