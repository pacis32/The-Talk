
import React from 'react'
import World from './World'
import Interview from'./Interview'
import Facebook from './Facebook'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Twiter from './Twiter';
import Instagram from './Instagram';
import './Topnavbar.css'



export default function Tonavbar() {
    return (
        <Router>
        <div>
        
        <nav className="Top-navbar">
        <ul className="navbar-list">
          {/* <li><Link to={'/'} className="nav-link"> Home </Link></li> */}
          <li><Link to={'/Interview'} className="nav-link">Interviews Directory</Link></li>
          <li><Link to={'/World'} className="nav-link">World Guide</Link></li>
          <li><Link to={'/Facebook'} className="nav-link">Facebook</Link></li>
          <li><Link to={'/Twiter'} className="nav-link">Twiter</Link></li>
          <li><Link to={'/Instagram'} className="nav-link">Instagram</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            {/* <Route exact path='/' component={} /> */}
            <Route path='/Interview' component={Interview} />
            <Route path='/ World' component={World} />
            <Route path='/Facebook' component={Facebook} />
            <Route path='/ Tweter' component={Twiter} />
            <Route path='/ Instagram' component={Instagram} />
        </Switch>
      </div>
    </Router>
    )
}


