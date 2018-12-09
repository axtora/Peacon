import React, { Component } from 'react';
import Main from './Containers/Main/main.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <Main logo='../Pindell-logo.png'/>
      </div>
    );
  }
}

export default App;
