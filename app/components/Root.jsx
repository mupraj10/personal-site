import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

//components being imported in
import Home from './Home';
import AboutMe from './AboutMe'
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Resume from './Resume'

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
        <div>
          <Navbar />
          <section className="section">
            <Route exact path='/' component={Home} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contactme' component={ContactMe} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

