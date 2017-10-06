import React, { Component } from 'react';

//components being imported in

import Navbar from './Navbar';
import AboutMe from './AboutMe'
import Projects from './Projects';
import Footer from './Footer';

export default class Root extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
      </div>
    )
  }
}

