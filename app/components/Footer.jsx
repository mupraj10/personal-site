import React, { Component } from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className='content has-text-centered'>
                    <a href="https://github.com/mupraj10" target="_blank">
                        <span className="icon" style={{ color: '#333' }}>
                            <i className="fa fa-1x fa-github" />
                        </span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/maggy-prajapati" target="_blank">
                        <span className="icon" style={{ color: '#333' }}>
                            <i className="fa fa-1x fa-linkedin" aria-hidden="true" />
                        </span>
                    </a>

                    <a href="mailto:mupraj10@gmail.com" target="_blank">
                        <span className="icon" style={{ color: '#333' }}>
                            <i className="fa fa-1x fa-envelope" aria-hidden="true" />
                        </span>
                    </a>

                    <a href="https://twitter.com/jgthms" target="_blank">
                        <span className="icon" style={{ color: '#333' }}>
                            <i className="fa fa-1x fa-medium" aria-hidden="true" />
                        </span>
                    </a>
                    <br />
                    <p> © 2017 | Handcoded with ❤️ </p>

                </div>
            </div >
        </footer >
    )
}

export default Footer;

