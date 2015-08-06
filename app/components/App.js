import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import Bio from './Bio';
import Events from './Events';
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
      <div style={styles.main}>
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

const styles = {
  main: {
    width: '20em',
    margin: '0 auto',
    padding: '1em 1.5em',
    background: 'whitesmoke'
  }
};
