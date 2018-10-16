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
                <ol id="location-list" className="current-list">
                {this.props.currentList.map((location) => {
                    return (
                        <li key={location.place_id}>
                            <Location
                                location={location}
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
