import { Projects } from "@/components";
import React, { useState } from "react";
import Link from "next/link";
import { client, urlFor } from "../../lib/client";

const ProjectDetails = ({ project }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="slug-projects-container">
    <div className="slug-home"> <Link href="/">HOME</Link></div>
      <div className="slug-project-card">
        <div className="slug-image-container">
          <img
            width={750}
            height={550}
            src={urlFor(project.image && project.image[index])}
            className="slug-project-detail-image"
          />
          <div className="slug-small-images-container">
            {project.image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                width={250}
                height={250}
                className={
                  i === index
                    ? "slug-small-image slug-selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="slug-project-link">
          <h3>Github</h3>
          <h3>Link to completed website </h3>
        </div>
        <div className="slug-description-container">
          <p className="slug-project-name">Project Name: {project.name}</p>
          <p className="slug-technology_stack">
            Project Stack: {project.technology_stack}
          </p>
          <p className="slug-details">Project Details: {project.details}</p>
          <p className="slug-project-description">
            Project Description:{project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == "project"]{
          slug {
              current
          }
      }`;

  const projects = await client.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;

  const project = await client.fetch(query);

  return { props: { project } };
};
export default ProjectDetails;
