import React, { Component } from 'react';

const Footer = () => {
    return (
        <footer>
        <p className="f6"><span className="dib mr4 mr5-ns">©2048 Your Company LLC, Inc.</span>
          <a className="link white-80 hover-light-purple" href="/terms">Terms</a> /
          <a className="link white-80 hover-gold" href="/privacy"> Privacy </a> /
          <a className="link white-80 hover-green" href="#">hi@yourcompany.com </a>
        </p>
      </footer>
    )
}

export default Footer;

