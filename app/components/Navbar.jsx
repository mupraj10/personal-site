import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    //convert fully to react ish 
    const handleClick = function(event){
        console.log('in handle clikc')
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    // $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }
  
    }

    return (
        <nav className="navbar is-light is-fixed">
            <div className="navbar-brand">
                <span className="navbar-item">{'Maggy Prajapati'}</span>
            
            <div onClick={handleClick} className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
            
            <div id="navMenu" className='navbar-menu' >
                <div className="navbar-end">
                    <Link to="/aboutme" className="navbar-item" >
                        About Me
                    </Link>
                    <Link to="/projects" className="navbar-item" >
                        Projects
                    </Link>
                    <Link to="/skills" className="navbar-item" >
                        Skills
                    </Link>
                    <Link to="/contactme" className="navbar-item" >
                        Contact Me
                    </Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;

