import React, { Component } from 'react';
import Continent from '../Continent/continent.js';
import './main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      continent: false,
      open: true,
    }
    this.logoOnClickButton = this.logoOnClickButton.bind(this);
    this.continentOn = this.continentOn.bind(this);
  }

  logoOnClickButton() {
    this.setState({
      status: true
    })
  }

  continentOn() {
    this.setState({
      continent: true
    })
  }

  __handleOpen = () => {
    this.setState({ open: true})
  };

  __handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div className="h-100">
        {this.state.status ? (
          <Continent />
        ) : (
          <>
          <div className='main'>
            <div className='logo'>
              <img src="../../../Pindell-logo.png" alt="logo" onClick={this.logoOnClickButton}/>
            </div>
          </div>
          </>
          )
        }
      </div>
    )
  }
}

export default Main;