import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './Location';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    const currentList = state.currently_shown;
    return { currentList };
} // end of mapStateToProps

class CurrentList extends Component {
    static propTypes = {
        currentList: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    render() {
        return (
            <div>
                <ol id="location-list" className="current_list">
                {this.props.currentList.map((loc) => {
                    return (
                        <li>
                            <Location
                                loc={loc}
                            />
                        </li>); // end of return
                    }) // end of map loop
                }
                </ol>
            </div>);
    } // end of render
} // end of CurrentList


export default connect(mapStateToProps)(CurrentList);
