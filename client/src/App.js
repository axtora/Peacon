import React, { Component } from 'react';
import Main from './Containers/Main/main';
import Signin from './Containers/Auth/SignIn';
import Continent from './Containers/Continent/continent';
import Asia from './Containers/Continent/Asia/asia';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <Main logo='../Pindell-logo.png'/>
        {/* <Continent/> */}
        {/* <Asia /> */}
      </div>
    );
  }
}

export default App;
