import React, { Component } from 'react';
import projects from '../../information/project.js'
import ProjectCard from './ProjectCard'

export default class Project extends  Component {
  constructor(){
    super()
    this.state = {
      projectId: null
    }
    this.displayProject = this.displayProject.bind(this)
  }

  displayProject(evt){
    evt.preventDefault();
    if (this.state.projectId === evt.target.id){
      this.setState({projectId: null}) 
    }
    else {
      console.log('attempting to access this', evt.target.className )
      this.setState({projectId: evt.target.id});
    }
    
  }

  render(){
    const noneClicked = "f3 link b hover-green no-underline black dib ph2 pv1";

    return (
      <section className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1>Projects </h1>
         
      <img
      src="information/duck.jpg"
      className="w-100 f5 measure"
      alt="Closeup photo of a tabby cat yawning."
    />
          {projects.map( project => 
          
          <a
          key={project.name}
          id={project.id}
          className={noneClicked}
          onClick={this.displayProject}
          >
          {project.name}
          </a>

          
        ) }

        {this.state.projectId && <ProjectCard projectId={this.state.projectId } /> }

        </section>

    )
  }
}