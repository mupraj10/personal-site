import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const linkStyle = "f4 fw6 black link hover-dark-green";

    return (

        <article className="helvetica pb5">
            <header className="vh-100 bg-light-gray dt w-100">
                <section className="w-100-ns mb6 w-100-l pt7 pl1-ns dark-gray">
          <div
            // style="background:url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right;background-size: cover;"
            className="dtc v-mid cover ph3 ph4-m ph5-l"
            >
            <h1 className='dark-green'> {'</>'} </h1>
            <h1 className="f3 f2-m f1-l mb0 w-70-xl w-60-l">
             Hi! I am Maggy Prajapati. I am software developer!</h1>
            <br />
            <p className="f4 black mt3 mb5 w-60-l w-80-xl lh-title"> Currently, I am a teaching fellow at
            <a href="https://www.gracehopper.com/" className={linkStyle}> Grace Hopper Academy</a>. You can check out some
            <Link to="/projects" className={linkStyle}> projects </Link>
                    I have worked on and the
            <Link to='/skills' className={linkStyle}> skills </Link>
                    I have.
            Coming with a behavorial neuroscience background, I am interested in .... 
            <br/>
            Feel free to 
            <Link to='/contactme'className={linkStyle}> contact me </Link> or take a look at my 
            <a href='../../public/index.html' className={linkStyle} download> resume </a>.
            
            </p> 
          </div>
        </section>
        </header >
    </article >
        
    )
}

export default Home;

