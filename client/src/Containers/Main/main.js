import React, { Component } from 'react';
import Continent from '../Continent/continent.js';
import Button from '@material-ui/core/Button';
import './main.css';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    }
    this.logoOnClickButton = this.logoOnClickButton.bind(this);
  }

  logoOnClickButton() {
    this.setState({
      status: true
    })
  }

  render() {
    return (
      <div className="main__div main__div_onClick">
        {this.state.status ? (
          <Continent/>
        ) : (
            <div className='main'>
              <div className='logo fade-in'>
                <img src={this.props.logo} alt="logo"/>
              </div>
              <Button variant='outlined' className='startButton' onClick={this.logoOnClickButton}>GET START</Button>
            </div>
          )
        }
      </div>
    )
  }
}

export default Main;