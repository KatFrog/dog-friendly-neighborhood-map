import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';

const mapStateToProps = (state) => {
    const options = state.loc_type;
    return { options };
} // end of mapStateToProps

const mapDispatchToProps = (dispatch) => {
    return {
        filterSelection:  (option) => {
            dispatch({
                type: option,
            })
        } // end of filterSelection
    };

} // end of mapDispatchToProps

class LocationList extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.object).isRequired,
        filterSelection: PropTypes.func.isRequired,
    }
    state = {
        selectedOption: null
    }

    render() {
        const { options } = this.props;
        return (
            <div className='locations-container' id="loc_container">
                <button id='show-locs'  className="locs" onClick={() => this.props.filterSelection("SHOW-ALL")}>Show All Locations</button>
                <button id='hide-locs'  className="locs" onClick={() => this.props.filterSelection("HIDE-ALL")}>Hide All Locations</button>
                <Select
                    className="location-selector"
                    value={this.state.selectedOption}
                    onChange = {(option) => this.props.filterSelection(option.value)}
                    options={options}
                    placeholder="Filter locations"
                />
                <hr />
            </div>
        );
    }
} // end of LocationList class

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
