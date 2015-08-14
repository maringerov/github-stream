import styles from './Events.less';
import React, { Component, PropTypes } from 'react';
import Event from '../event/Event';

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
      <div className={styles.eventsContainer}>
        <h3>Recent Activity</h3>
        <ul>{events}</ul>
      </div>
    );
  }
};
