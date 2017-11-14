import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            fullBar: false
        }
        this.showFullBar = this.showFullBar.bind(this);
    }

    showFullBar(evt){
        evt.preventDefault();
        this.state.fullBar ? 
        this.setState({fullBar: false}) :
        this.setState({fullBar: true})
    }

    render(){
        return (

            <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            {
                this.state.fullBar ?
            <nav className="f6 fw6 ttu tracked">
              <a className="link black dib mr3" href="/projects" title="Home">Home</a>
              <a className="link black dib mr3" href="/aboutme" title="About">About</a>
              <a className="link black dib mr3" href="/skills" title="Store">Store</a>
              <a className="link black dib" href="/" title="Contact">Contact</a>
            </nav> :
            <a className="dtc v-mid mid-gray link dim w-25" onClick={this.showFullBar} title="Home">
            <img src='/information/rubberduck' className="dib w2 h2 br-100"  />
          </a>
            }

          </header>
          
        )
    }
}
