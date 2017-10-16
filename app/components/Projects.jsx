import React from 'react';

const Projects = () => {
    return (

        <section className="section">
            <div className="container">
                <h2 className="title">Projects </h2>
                <hr />

                <div className="card">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Ice Creamy
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">Save</a>
                  <a href="#" className="card-footer-item">Edit</a>
                  <a href="#" className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
              <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  BuJo
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">Save</a>
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
              </footer>
            </div>


            </div>
        </section>

    )
}

export default Projects;




