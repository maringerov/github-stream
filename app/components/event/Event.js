import styles from './Event.less';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo_url: '',
      event_type: ''
    };
  }

  static propTypes = {
    event: PropTypes.object.isRequired
  }

  componentDidMount() {
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
          event_type: 'Pushed to'
        });
        break;
      case 'WatchEvent':
        this.setState({
          event_type: 'Starred'
        });
        break;
      case 'CreateEvent':
        this.setState({
          event_type: 'Created'
        });
        break;
      default:
        this.setState({
          event_type: this.props.event.type
        });
    }
  }

  render() {
    const { event } = this.props;
    const time_ago = moment(event.created_at).fromNow();

    const commitMsg = event.type === 'PushEvent' ?
      event.payload.commits.slice(0,2).map((commit, i) => {
        return (
          <li key={i}>
            <small>
              <a href='#'>{commit.sha.substr(0,6)}</a> {commit.message}
            </small>
          </li>
        );
      }) : '';

    return (
      <li className={styles.event}>
        {this.state.event_type} <a href={this.state.repo_url}>{event.repo.name}</a>
        <br />
        <ul>{commitMsg}</ul>
        <small>{time_ago}</small>
      </li>
    );
  }
};
