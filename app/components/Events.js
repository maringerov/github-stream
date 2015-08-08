import React, { Component, PropTypes } from 'react';
import Event from './Event';
import Radium from 'radium';

@Radium
export default class Events extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired
  }
  render() {
    const events = this.props.events.map((event, i) => {
      return (
        <Event key={i} event={event} />
      );
    });
    return (
      <div style={styles.eventsContainer}>
        <h3 style={styles.heading}>Recent Activity</h3>
        <ul style={styles.eventList}>{events}</ul>
      </div>
    );
  }
};

const styles = {
  eventsContainer: {
    clear: 'both'
  },
  heading: {
    marginBottom: 0
  },
  eventList: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginTop: 0
  }
};
