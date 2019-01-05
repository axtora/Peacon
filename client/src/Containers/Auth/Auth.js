import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import SignIn from '../Auth/SignIn';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const logged = false;

class Auth extends Component {
  render() {
    return (
      <>
          {
            !logged && <Redirect to="/auth/signin" />
          }
          <Modal
            aria-labelledby="test"
            aria-describedby="test2"
            open={this.state.open}
            onClose={this.__handleClose}
            disableBackdropClick="true"
          >
            <SignIn />
          </Modal>        
      </>
    )
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Auth;