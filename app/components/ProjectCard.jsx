import React from "react";

import projects from "../../information/project";

const ProjectCard = props => {
  const project = projects[props.projectId];
  // console.log(project);

  return (
    <article className="w-100 w-60-m  w-25-ns pa2-ns">

      <img
        src="http://tachyons.io/img/cat-720.jpg"
        className="w-100 db"
        alt="Closeup photo of a tabby cat yawning."
      />
      <div className="pa3">
        <p className=" f6 lh-copy measure">{project.info}</p>

        <div className="gray db pv2">
          <a
            className="link b hover-green no-underline black dib ph2 pv1"
            href={project.github}
          >
            Github
          </a>
          <a
            className="link b hover-green no-underline black dib ph2 pv1"
            href={project.demo}
          >
            Demo
          </a>
          <a
            className="ink b hover-green no-underline black dib ph2 pv1"
            href={project.youtube}
          >
            Youtube
          </a>
        </div>
        <div>
          <hr />
          {project.frameworks.map(framework => (
            <button key={Math.random()} className="dib mr1 mb2">
              {" "}
              {framework}{" "}
            </button>
          ))}{" "}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
