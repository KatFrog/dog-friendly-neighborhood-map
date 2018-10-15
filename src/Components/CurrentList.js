import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './Location';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    const currentList = state.currently_shown;
    return { currentList };
}


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
                        <li key={loc.place_id}>
                            <Location
                                loc={loc}
                                map={this.props.map}
                            />
                        </li>); 
                    })
                }
                </ol>
            </div>
        );
    }
}


export default connect(mapStateToProps)(CurrentList);
