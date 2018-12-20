import React, { Component } from 'react';
import Navbar from '../../Navbar/nav.js';
import Jumbotron from '../../Jumbotron/jumbotron.js';
import AsiaLogo from '../../../Image/AsiaImage/AsiaImage1.jpg';

class Asia extends Component {
  render() {
    return (
      <>
       <Navbar />
       <Jumbotron imagePath={AsiaLogo} alt="Asia" />
      </>
    )
  }
}

export default Asia;