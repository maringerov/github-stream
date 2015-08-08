import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Radium from 'radium';

@Radium
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo_url: '',
      eventType: ''
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

    switch (this.props.event.type) {
      case 'PushEvent':
        this.setState({
          eventType: 'Pushed to'
        });
        break;
      case 'WatchEvent':
        this.setState({
          eventType: 'Starred'
        });
        break;
      case 'CreateEvent':
        this.setState({
          eventType: 'Created'
        });
        break;
      default:
        this.setState({
          eventType: this.props.event.type
        });
    }
  }

  render() {
    const { event } = this.props;
    const time_ago = moment(event.created_at).fromNow();
    // const commitMsg = event.payload.commits.map((commit, i) => {
    //   return <li key={i}>{commit.message}</li>;
    // });
    return (
      <li style={styles.event}>
        {this.state.eventType} <a href={this.state.repo_url}>{event.repo.name}</a>
        <br />
        {/* <ul>{commitMsg}</ul> */}
        <small>{time_ago}</small>
      </li>
    );
  }
};

const styles = {
  event: {
    borderBottom: '1px solid grey',
    paddingTop: '1em',
    paddingBottom: '1em'
  }
};
