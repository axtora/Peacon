import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
          <img src={this.props.imagePath} alt={this.props.alt} />
          test
      </div>
    )
  }
}

export default Jumbotron;
