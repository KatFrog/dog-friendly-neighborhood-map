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
    }; // end of return
} // end of mapDispatchToProps



class LocationList extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.object).isRequired,
        filterSelection: PropTypes.func.isRequired,
    }
    state = {
        selectedOption: null
    }

    changeFilter = (option) => {
        this.props.filterSelection(option.value);
        this.setState({selectedOption: option});
    } // end of changeFilter

    resetFilters = (option) => {
        this.props.filterSelection(option);
        this.setState({selectedOption: null});
    } // end of resetFilters

    render() {
        const { options } = this.props;
        return (
            <div className='locations-container' id="loc_container">
                <button id='show-locs'  className="locs" onClick={() => this.resetFilters("SHOW-ALL")}>Show All Locations</button>
                <button id='hide-locs'  className="locs" onClick={() => this.resetFilters("HIDE-ALL")}>Hide All Locations</button>
                <Select
                    className="location-selector"
                    value={this.state.selectedOption}
                    onChange = {(option) => this.changeFilter(option)}
                    options={options}
                    placeholder="Filter locations"
                />
                <hr />
            </div>
        );
    }
} // end of LocationList class

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
