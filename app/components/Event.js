import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Radium from 'radium';

@Radium
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo_url: ''
    };
  }

  static propTypes = {
    event: PropTypes.object.isRequired
  }

  componentWillMount() {
    fetch(this.props.event.repo.url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({
          repo_url: json.html_url
        });
      });
  }

  render() {
    const { event } = this.props;
    const time_ago = moment(event.created_at).fromNow();
    
    return (
      <li style={styles.event}>
        {event.type} on <a href={this.state.repo_url}>{event.repo.name}</a>
        <br />
        <small>{time_ago}</small>
      </li>
    );
  }
};

const styles = {
  event: {
    borderBottom: '1px solid grey'
  }
};
