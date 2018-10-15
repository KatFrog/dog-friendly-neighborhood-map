import { Component } from 'react';
import PropTypes from 'prop-types';
import { create_map_marker } from './MapMarker';

class Location extends Component {
    constructor() {
        super();
        this.mapMarker = undefined;
    }
    static propTypes = {
        loc: PropTypes.object.isRequired,
        map: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.mapMarker = create_map_marker(this.props.loc, this.props.map);
        this.mapMarker.addEventListener('click', () => {

        });
    }

    componentWillUnmount() {
        this.mapMarker.setMap(null);
    }

    render() {
        return this.props.loc.name;
    }
}

export default Location;
