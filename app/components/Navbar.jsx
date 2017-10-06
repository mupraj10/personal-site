import React, { Component } from 'react';

const Navbar = () => {
    return (
        <nav className="navbar is-light">
            <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>
            <div className="navbar-menu">
            <div className="navbar-start">
            <span className="navbar-item">{'Maggy Prajapati'}</span>
            </div>
            <div className="navbar-end">
                <a className="navbar-item " href="https://github.com/mupraj10" target="_blank">
                    <span className="icon" style={{ color: '#333' }}>
                        <i className="fa fa-lg fa-github" />
                    </span>
                </a>
                <a className="navbar-item " href="https://twitter.com/jgthms" target="_blank">
                    <span className="icon">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </span>
                </a>

                <a className="navbar-item " href="https://twitter.com/jgthms" target="_blank">
                    <span className="icon">
                        <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                </a>

                <a className="navbar-item " href="https://twitter.com/jgthms" target="_blank">
                <span className="icon">
                    <i className="fa fa-medium" aria-hidden="true" />
                </span>
            </a>

            </div>
            </div>
        </nav>
            )
}

export default Navbar;

