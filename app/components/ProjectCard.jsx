import React from "react";

import projects from "../../information/project";

const ProjectCard = props => {
  const project = projects[props.projectId];
  const linkStyle = "link b hover-green no-underline black dib ph2 pv1"
  return (
    <article className="pa3">
  

      <img
        src="http://tachyons.io/img/cat-720.jpg"
        className="w-100 f5 measure"
        alt="Closeup photo of a tabby cat yawning."
      />
    
       

        <div className="measure">
        <div className='tc'>  
        <a
        className={linkStyle}
        href={project.github}
      >
        Github
      </a>
      <a
        className={linkStyle}
        href={project.demo}
      >
        Demo
      </a>
      <a
        className={linkStyle}
        href={project.youtube}
      >
        Youtube
      </a></div>
          
          <p className="lh-copy ">{project.info}</p>

        
          {project.frameworks.map(framework => (
           
              
              <a href={framework.link} key={`${Math.floor()}${framework.name}`}className='link dark-blue fw4 lh-title'>#{framework.name  }{"  "}{" "}</a>
           
          ))}
          
        </div>
       
        
       
  
    </article>
  );
};

export default ProjectCard;
