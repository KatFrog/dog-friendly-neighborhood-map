import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';

const mapStateToProps = (state) => {
    const options = state.location_type;
    return { options };
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterSelection:  (option) => {
            dispatch({
                type: option,
            })
        }
    };
}



class LocationFilters extends Component {
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
            <div className="filters-container">
                <label id='show-label' htmlFor='show-locations' className='hidden'>Show all the locations</label>
                <button id='show-locations'  className="filter-button" aria-labelledby='show-label' onClick={() => this.resetFilters("SHOW-ALL")}>Show All Locations</button>
                <label id='hide-label' htmlFor='hide-locations' className='hidden'>Hide all the locations</label>
                <button id='hide-locations'  className="filter-button" aria-labelledby='hide-label' onClick={() => this.resetFilters("HIDE-ALL")}>Hide All Locations</button>
                <label id='filter-lable' className='hidden'>Choose a location type to filter the list of dog friendly places.</label>
                <Select
                    className="location-selector"
                    classNamePrefix="location-selector"
                    value={this.state.selectedOption}
                    onChange = {(option) => this.changeFilter(option)}
                    options={options}
                    placeholder="Filter Locations"
                />
                <hr />
            </div>
        );
    }
} // end of LocationFilters class

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilters);
