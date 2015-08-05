import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Bio extends Component {
  static propTypes = {
    bio: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <h3> User Profile </h3>
        {this.props.bio.avatar_url && <img style={styles.bio.avatar} src={this.props.bio.avatar_url} />}
        {this.props.bio.name && <a href={this.props.bio.html_url}>{this.props.bio.name}</a>}
        {this.props.bio.location && <span> | {this.props.bio.location}</span>}
        {this.props.bio.company && <span> | Company: {this.props.bio.company}</span>}
        {this.props.bio.followers && <span> | Followers: {this.props.bio.followers}</span>}
        {this.props.bio.following && <span> | Following: {this.props.bio.following}</span>}
        {this.props.bio.following && <span> | Public Repos: {this.props.bio.public_repos}</span>}
      </div>
    );
  }
}

const styles = {
  bio: {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: '50%',
    }
  }
}
