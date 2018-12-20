import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron__background">
          <img src={this.props.imagePath} alt={this.props.alt} />
        </div>
      </div>
    )
  }
}

export default Jumbotron;
 