import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const linkStyle = 'f4 fw6 black link hover-dark-green';

    return (

          <div className="dtc v-mid cover ph3 ph4-m ph5-l" >
            <h1 className="dark-green"> {'</>'} </h1>
            <h1 className="f3 f2-m f1-l mb0 w-70-xl w-60-l">
             Hi! I am Maggy. I write code! </h1>
            <br />
            <p className="f4 black mt3 mb5 w-60-l w-80-xl lh-title"> Right now, I am a teaching fellow at
            <a href="https://www.gracehopper.com/" className={linkStyle}> Grace Hopper Academy</a>. You can check out some
            <Link to="/projects" className={linkStyle}> projects </Link>
                    I have worked on and the
            <Link to="/skills" className={linkStyle}> skills </Link>
                    I have.
            I documented my
            <Link to="/blog" className={linkStyle}> journey </Link>
             in becoming a software engineer and who I 
             <Link to="/aboutme" className={linkStyle}> am </Link>. 
            <br />
            Feel free to
            <a href="mailto:mupraj10@gmail.com" className={linkStyle}> contact me </a> or take a look at my
            <a href="../../information/resume.pdf" className={linkStyle} download> resume</a>.

            </p>
          </div>
        
    )
}

export default Home;

