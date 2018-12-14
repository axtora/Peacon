import React, { Component } from 'react';
import Main from './Containers/Main/main.js';
import Continent from './Containers/Continent/continent.js';
import Asia from './Containers/Continent/Asia/asia.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        {/* <Main logo='../Pindell-logo.png'/> */}
        {/* <Continent/> */}
        <Asia />
      </div>
    );
  }
}

export default App;
