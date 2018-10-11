import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const locations = state.locations;
    const currently_shown = state.currently_shown;
    return { locations, currently_shown };
} // end of mapStateToProps

const mapDispatchToProps = (state) => {

} // end of mapDispatchToProps

class LocationList extends Component {

} // end of LocationList class

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
