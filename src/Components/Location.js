import { Component } from 'react';
import PropTypes from 'prop-types';
import { create_map_marker } from './MapMarker';

class Location extends Component {
    static propTypes = {
        loc: PropTypes.object.isRequired,
        map: PropTypes.object.isRequired,
    }

    mapMarker = create_map_marker(this.props.loc, this.props.map);

    render() {
        return this.props.loc.name;
    }
}

export default Location;
