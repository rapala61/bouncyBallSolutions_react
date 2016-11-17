import React, { Component } from 'react';
import Ball from './ball/Ball';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      balls: [
        {
          url: 'http://www.clipartkid.com/images/482/clip-art-categories-clip-art-basics-animals-clip-art-awareness-ribbons-dKsFVH-clipart.png'
        },
        {
          url: 'http://www.thedigitalblender.com/Project%209/ball3.png'
        },
        {
          url: 'https://albiebrown.github.io/gravify/images/ball.png'
        },
        {
          url: 'http://www.exhibitiongiveaways.co.uk/images/horizontal/170576/345ClassicBouncyBallRed.png'
        }
      ]
    };

    this.selectRandomBall = this.selectRandomBall.bind(this);
  }

  /**
   * componentWillMount is called before the render method is executed.
   * It is important to note that setting the state in this
   * phase will not trigger a re-rendering.
   */
  componentWillMount() {
    this.selectRandomBall();
  }

  selectRandomBall() {
    this.setState({
      selectedIndex: Math.floor(Math.random() * this.state.balls.length)
    });
    console.log('selected random ball!');
  }

  render() {
    return (
      <Ball
        url={this.state.balls[this.state.selectedIndex].url}
        selectRandomBall={this.selectRandomBall}
      />
    );
  }
}

export default App;
