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
      <div>
        <h3>Events</h3>
        <hr />
        <ul style={styles.eventList}>{events}</ul>
      </div>
    );
  }
};

const styles = {
  eventList: {
    listStyleType: 'none'
  }
};
