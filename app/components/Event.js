import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Event extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  }
  render() {
    const { event } = this.props;
    return (
      <li style={styles.event}>
        {event.type} on {event.repo.name}
        <br />
        <small>{event.created_at}</small>
      </li>
    );
  }
};

const styles = {
  event: {
    borderBottom: '1px solid grey'
  }
};
