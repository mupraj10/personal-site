import React from 'react';
import projects from '../../information/project.js'
import ProjectCard from './ProjectCard'

const Projects = () => {
  // console.table(projects);
    return (
      <section className="cf w-100 pa2-ns">
      <h1>projects should be here </h1>
     { projects.map( project => <div key={project.name}> <ProjectCard project={project}/> </div> ) }
      </section>
    )
}

export default Projects;




