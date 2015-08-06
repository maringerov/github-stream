import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Bio extends Component {
  static propTypes = {
    bio: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
  }
  render() {
    const { bio } = this.props;
    return (
      <div>
        {bio.avatar_url && <img style={styles.bio.avatar} src={bio.avatar_url} />}
        <div style={styles.bio.profile}>
          <h4 style={styles.h4}>
            {bio.name && <a style={styles.a} href={bio.html_url}>{bio.name}</a>}
            {bio.location && <span> | {bio.location}</span>}
          </h4>
          { bio.followers && <div style={styles.bio.clout}>
            {bio.followers}<small style={styles.bio.stats}>Followers</small>
          </div> }
          { bio.following && <div style={styles.bio.clout}>
            {bio.following}<small style={styles.bio.stats}>Following</small>
          </div> }
          { bio.public_repos && <div style={styles.bio.clout}>
            {bio.public_repos}<small style={styles.bio.stats}>Public Repos</small>
          </div> }
        </div>
      </div>
    );
  }
};

const styles = {
  h4: {
    marginBottom: 10
  },
  a: {
    textDecoration: 'none'
  },
  bio: {
    avatar: {
      float: 'left',
      width: 75,
      height: 75,
      borderRadius: '50%',
      margin: '0 .75em 0 0'
    },
    clout: {
      display: 'inline-block',
      padding: 5,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5em'
    },
    stats: {
      display: 'block',
      fontWeight: 'normal',
      fontSize: '.5em'
    }
  }
};
