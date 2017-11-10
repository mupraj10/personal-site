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
    (this.state.projectId === evt.target.id)
    ? this.setState({projectId: null})
    : this.setState({projectId: evt.target.id});
  }

  render(){
    return (
      <section className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1>Projects </h1>
         {projects.map( project => 
          <a
          key={project.name}
          id={project.id}
          className="f3 link b hover-light-green no-underline black dib ph2 pv1" 
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