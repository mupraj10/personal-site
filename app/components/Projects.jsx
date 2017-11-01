import React from 'react';

const Projects = () => {
    return (

        <article className="helvetica pb5">
            <section className="w-100-ns mb6 w-100-l pt6 pl1-ns dark-gray">
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


            </section>
        </article>

    )
}

export default Projects;




