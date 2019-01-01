import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {

  __MovePage() {
    setTimeout(() => {
      console.log('test');
    }, 2000);  
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron__background">
          <img src={this.props.imagePath} alt={this.props.alt} onMouseOver={ this.__MovePage}/>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
 