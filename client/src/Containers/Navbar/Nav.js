import React, { Component } from 'react';
import './hamburgerMenu.css';
import './nav.css';

class Navbar extends Component {
  hamburgerOnClick(e) {
    console.log(e);
  }
  render() {
    return (
      <nav className="navbar">
          <div className="navbar__logo navbar__child">
            <a href="" className="text-black">Pindell</a>
          </div>
          <div className="navbar__events navbar__child">
            <ul>
            <li><a href="" className="text-black">Best&Hot</a></li>
            <li><a href="" className="text-black">Today</a></li>
            <li><a href="" className="text-black">Community</a></li>
            <li><a href="" className="text-black">News</a></li>
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
      </nav>
    );
  }
}

export default Navbar;