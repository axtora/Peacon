import React, { Component } from 'react';
import './hamburgerMenu.css';
import './nav.css';

class Navbar extends Component {
  hamburgerOnClick(e) {
    console.log(e);
  }
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
        <nav className="navbar">
          <div className="navbar__content">
            <div className="navbar__logo navbar__child">
              <a href="">Pindell</a>
            </div>
            <div className="navbar__events navbar__child">
              <ul>
              <li>Best&Hot</li>
              <li>Today</li>
              <li>Community</li>
              <li>News</li>
              </ul>
            </div>
            <div>
              <div className="hamburgerMenu navbar__child">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;