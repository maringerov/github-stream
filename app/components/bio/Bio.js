import styles from './Bio.less'
import React, { Component, PropTypes } from 'react';

export default class Bio extends Component {
  static propTypes = {
    bio: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
  }
  render() {
    const { bio } = this.props;
    return (
      <div className={styles.bio}>
        {bio.avatar_url && <img src={bio.avatar_url} />}
        <div>
          <h4>
            {bio.name && <a href={bio.html_url}>{bio.name}</a>}
            {bio.location && <span> | {bio.location}</span>}
          </h4>
          { bio.followers && <div className={styles.clout}>
            {bio.followers}<small>Followers</small>
          </div> }
          { bio.following && <div className={styles.clout}>
            {bio.following}<small>Following</small>
          </div> }
          { bio.public_repos && <div className={styles.clout}>
            {bio.public_repos}<small>Public Repos</small>
          </div> }
        </div>
      </div>
    );
  }
};
