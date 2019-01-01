import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Continent from '../Continent/continent.js';
import Modal from '@material-ui/core/Modal';
import SignIn from '../Auth/SignIn';
import { withStyles } from '@material-ui/core';
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
    const { classes } = this.props;
    return (
      <div className="h-100">
        {this.state.status ? (
          <Continent />
        ) : (
          <>
          <Modal
            aria-labelledby="test"
            aria-describedby="test2"
            open={this.state.open}
            onClose={this.__handleClose}
            disableBackdropClick="true"
          >
            <SignIn />
          </Modal>
          <div className='main'>
            <div className='logo'>
              <img src={this.props.logo} alt="logo" onClick={this.logoOnClickButton}/>
            </div>
          </div>
          </>
          )
        }
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Main;