import React from 'react';


const ProjectCard = (props) => {
  
  const project = props.project;
  // console.log(project);

    return (
        <article className="fl w-100 w-60-m  w-25-ns pa2-ns">
        
           <h1 className="ph2 ph0-ns pb3 link db">{project.name}</h1>
        <ul className="list ph3 ph5-ns pv4">
        {project.frameworks.map(framework => <li key={Math.random()}className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">{framework} </li>)}
        </ul>

        <img src="http://tachyons.io/img/cat-720.jpg" className="w-100 db" alt="Closeup photo of a tabby cat yawning." />
        <div className="pa3">
          <span className="link dim lh-title">{project.info}</span>

          <small className="gray db pv2"> <a className=" link b hover-green no-underline black dib ph2 pv1" href={project.github}>Github</a>
          <a className="link b hover-green no-underline black dib ph2 pv1" href={project.demo}>Demo</a>
          <a className="ink b hover-green no-underline black dib ph2 pv1" href={project.youtube}>Youtube</a></small>
        </div>
      </article>
      
            
    )
}

export default ProjectCard;

