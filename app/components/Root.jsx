import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components being imported in
import Home from './Home';
import AboutMe from './AboutMe'
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Resume from './Resume'

import ClickMenu from './ClickMenu'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

export default class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        
        <div className="vh-100 bg-light-gray dt w-100">
          <ClickMenu/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contactme' component={ContactMe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

