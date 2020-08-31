import React from 'react';
import Navbar from './Components/Navbar';

import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' />
      <Route path='/Home' />
      <Route path='/Prdocts' />
      <Route path='/ Support' />
      <Route path='/' />
    </Switch>
    </Router>
   
    </>
  );
}

export default App;
