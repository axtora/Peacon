import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Singin.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '350px'
  },
  button: {
    margin: theme.spacing.unit,
    width: '350px',
    height: '50px'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Signin extends Component {
  state = {
    name: ''
  }
  __handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="signin">
        <div className="point__"/>
        <div className="signin__Header">
          <div className="signin__logo">
            <img src="../../../Pindell-logo.png" alt="pindell"/>
          </div>
        </div>
        <form noValidate autoComplete="off" action="auth/singin" method="GET"> 
          <div>
            <TextField
              id="outlined-name"
              label="유저 이메일"
              className={classes.textField}
              value={this.state.name}
              onChange={this.__handleChange('name')}
              margin="normal"
              type="email"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="유저 패스워드"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            /> 
          </div> 
          <div className="subForm">
            <Link to="/auth/singup" className="signup">계정이 없으신가요?</Link>
          </div>
          <Button variant="outlined" className={classes.button}>
            로그인
          </Button>            
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired
} 

export default withStyles(styles)(Signin);