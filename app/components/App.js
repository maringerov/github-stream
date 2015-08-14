import styles from './App.less'

import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import Bio from './bio/Bio';
import Events from './events/Events';
import helpers from '../utils/helpers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      bio: {},
      events: []
    }
  }
  init() {
    helpers.getGithubInfo('maringerov')
      .then((dataObj) => {
        this.setState({
          repos: dataObj.repos,
          bio: dataObj.bio,
          events: dataObj.events
        });
      });
  }
  componentDidMount(){
    this.init();
  }
  componentWillReceiveProps(){
    this.init();
  }
  render() {
    return (
      <div className={styles.app}>
        {this.applyStyle()}
        <Bio username={'maringerov'} bio={this.state.bio}/>
        <Events events={this.state.events} />
      </div>
    );
  }
  applyStyle() {
    return <Style rules={{
      body: {
        margin: 0,
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: 16
      },
      html: {
        background: '#ccc'
      }
      }} />
  }
};
