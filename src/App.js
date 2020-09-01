import React from 'react';
import Navbar from './Components/Navbar';
import Topnavbar from './Components/Tonavbar';


import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Frontpage from './Components/Frontpage';



function App() {
  return (
    <>
    <Router>
    <Topnavbar/>
    <Navbar/>
    <Frontpage/>

    
    <div/>
   
    <Switch>
      <Route path='/ navbar' />
      <Route path='/Home' />
      <Route path='/Prdocts' />
      <Route path='/ Support' />
      

    </Switch>
    </Router>
   
    </>
  );
}

export default App;
