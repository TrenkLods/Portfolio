import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
export const Projects = ({
  project: { image, name, slug, technology_stack, description, details },
}) => {
  return (
    <div className="projects-container">
      <div className="project-card">
        <Link href={`/projects/${slug.current}`}>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="project-image"
          />
          {/**  <div className="project-collor1">
            <p className="project-name">{name}</p>
            <p className="technology_stack">{technology_stack}</p>
            <p className="details">{details}</p>
            <p className="project-description">{description}</p>
          </div>*/}
        </Link>
      </div>
    </div>
  );
};
export default Projects;
