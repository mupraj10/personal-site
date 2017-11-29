import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components needed 
import AboutMe from './AboutMe';

const Home = () => {
    const linkStyle = 'f4 fw6 black link hover-green';
    const imgUrl = 'http://mrmrs.github.io/photos/display.jpg'

    return (

        <article className="avenir pb5">
        {/* Name screen */}
  <header className="vh-100 bg-light-gray dt w-100">
    <div
      className="dtc v-mid cover ph3 ph4-m ph5-l">
      <h1 className="f2 f-subheadline-l measure lh-title ">Things here.</h1>
      <h2 className="f6 fw6 black">A story by Nancy Drew</h2>
    </div>
  </header>


  <div className="ph3 ph4-m ph5-l">
  {/* one line thing about me screen */}
    <p className="lh-copy f5 f3-m f1-l measure center pv4">
      On <time>March 14, 1896</time>, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment. </p>


      {/* About me screen with photo  */}
    <div className="f5 f3-m lh-copy">
      <AboutMe />
      
      {/* Projects */}
      <div className="cf">
        <div className="fl w-100 w-50-l pr2-l pb3">
          <img className="db w-100" src="http://mrmrs.github.io/photos/010.jpg" alt="Photo of a dusk skyline above a grassy rockface covered in trees."/>
        </div>
        <div className="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
          <img className="db w-100" src="http://mrmrs.github.io/photos/011.jpg" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house."/>
        </div>
        <div className="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
          <img className="db w-100" src="http://mrmrs.github.io/photos/012.jpg" alt="Photo of the sea with mist covering the rocky formations near the shore."/>
        </div>
        <div className="fl w-100 w-50-l pl2-l">
          <img className="db w-100" src="http://mrmrs.github.io/photos/013.jpg" alt="Photo of the foundations of a building on a cliff overlooking a lighthouse."/>
        </div>
      </div>
    </div>
  </div>
</article>
        
    )
}

export default Home;


// <div className="dtc v-mid cover ph3 ph4-m ph5-l" >

//     <h1 className="f3 f2-m f1-l mb0 w-70-xl w-60-l">
//      Hi! I am Maggy. I write code! </h1>
//     <br />
//     <p className="f4 black mt3 mb5 w-60-l w-80-xl lh-title"> Currently, I am a teaching fellow at
//     <a href="https://www.gracehopper.com/" className={linkStyle}> Grace Hopper Academy</a>. You can check out some
//     <Link to="/projects" className={linkStyle}> projects </Link>
//             I have worked on and the
//     <Link to="/skills" className={linkStyle}> skills </Link>
//             I have.
//     I documented my
//     <Link to="/blog" className={linkStyle}> journey </Link>
//      in becoming a software engineer and who I 
//      <Link to="/aboutme" className={linkStyle}> am </Link>. 
//     <br />
//     Feel free to
//     <a href="mailto:mupraj10@gmail.com" className={linkStyle}> contact me </a> or take a look at my
//     <a href="../../information/resume.pdf" className={linkStyle} download> resume</a>.

//     </p>
//   </div>