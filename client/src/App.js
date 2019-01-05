import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Containers/Main/main';
import SignIn from './Containers/Auth/SignIn';
import SignUp from './Containers/Auth/SignUp';

const App = () => {
  return (
    <Router>
       <>
        <Route path="/" exact component={Main}/>
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
       </>
    </Router>
  )
}

export default App;
