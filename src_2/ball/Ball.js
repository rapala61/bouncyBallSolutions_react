import React, { Component } from 'react';
// import React from 'react';
import './Ball.css';

class Ball extends Component {
  render() {
    return (
      <div className="ball-container">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default Ball;

// // Stateless
// const ball = (props) => {
//   return (
//     <div className="ball-container">
//       <img src={this.props.url} alt="" />
//     </div>
//   );
// };
//
// export default ball;
