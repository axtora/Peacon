import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../../Navbar/Nav.js';
import Jumbotron from '../../Jumbotron/jumbotron.js';
import AsiaLogo from '../../../Image/AsiaImage/AsiaImage1.jpg';

const test = ({match}) => {
  return (
    <h1>
      {match.params.test}
    </h1>
  )
}

const Asia = () => {
  return (
    <div>
       <Navbar />
       <Jumbotron imagePath={AsiaLogo} alt="Asia" title="Asia"/>
       <Route 
        path="/test/:test"
        component={Navbar}
      >
      </Route>
    </div>
  )
}

export default Asia;