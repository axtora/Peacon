import React, { Component } from 'react';
import './StartToShow.css';

class StartToShow extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>Signature</h1>
              <p>7.7 deck<span>2018</span></p>
              <p className="price">$ 89.00</p>
            </div>
            <div className="right">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <button>Add to cart, yo</button>
            </div>
          </div>
          <div className="img-wrapper">
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt="test"/>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>test</h1>
              <p>7.7 qweqweqwe<span>qweqwe</span></p>
              <p className="price">$ 89.qweqwe</p>
            </div>
            <div className="right">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <button>Add asdasd cart, yo</button>
            </div>
          </div>
        <div className="img-wrapper">
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt="test"/>
        </div>
      </div>
    </>
    )
  }
}

export default StartToShow;