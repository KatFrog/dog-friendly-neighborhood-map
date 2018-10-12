import { Component } from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
    static propTypes = {
        loc: PropTypes.object.isRequired,
    }

    render() {
        return this.props.loc.name;
    } // end of render
} // end of Location

export default Location;
