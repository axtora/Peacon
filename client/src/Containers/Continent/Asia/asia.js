import React, { Component } from 'react';
import Navbar from '../../Navbar/nav.js';
import Jumbotron from '../../Jumbotron/jumbotron.js';

class Asia extends Component {
  render() {
    const asiaImage = [
      '../../../Image/AsiaImage/AsiaImage1.jpg',
      '../../../Image/AsiaImage/AsiaImage2.jpg',
      '../../../Image/AsiaImage/AsiaImage3.jpg',
      '../../../Image/AsiaImage/AsiaImage4.jpg',
      '../../../Image/AsiaImage/AsiaImage5.jpg',
    ];

    const beta = "../../../Image/AsiaImage/AsiaImage1.jpg";

    return (
      <>
       <Navbar />
       <Jumbotron imagePath={beta} alt="Asia" />
      </>
    )
  }
}

export default Asia;