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
      <div style={styles.bio}>
        {bio.avatar_url && <img style={styles.avatar} src={bio.avatar_url} />}
        <div>
          <h4 style={styles.h4}>
            {bio.name && <a style={styles.a} href={bio.html_url}>{bio.name}</a>}
            {bio.location && <span> | {bio.location}</span>}
          </h4>
          { bio.followers && <div style={styles.clout}>
            {bio.followers}<small style={styles.stats}>Followers</small>
          </div> }
          { bio.following && <div style={styles.clout}>
            {bio.following}<small style={styles.stats}>Following</small>
          </div> }
          { bio.public_repos && <div style={styles.clout}>
            {bio.public_repos}<small style={styles.stats}>Public Repos</small>
          </div> }
        </div>
      </div>
    );
  }
};

const styles = {
  bio: {
    background: '#fff',
    position: 'fixed',
    width: 'inherit',
    paddingTop: 10
  },
  h4: {
    marginTop: 0,
    marginBottom: 10
  },
  a: {
    textDecoration: 'none'
  },
  avatar: {
    float: 'left',
    width: 75,
    height: 75,
    borderRadius: '50%',
    margin: '0 .75em 0 .75em'
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
};
