import React, { Component } from 'react';
import Ball from './ball/Ball';

class App extends Component {

  constructor() {
    super();
    this.state = {
      ballUrl: 'http://www.exhibitiongiveaways.co.uk/images/horizontal/170576/345ClassicBouncyBallRed.png'
    };
  }

  render() {
    return (
      <Ball url={this.state.ballUrl} />
    );
  }
}

export default App;
