import React from "react";
import { ProjectComponent } from "./ProjectComponent";

interface Project {
  title: string;
  description: string;
  projectlink:string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Curefab",
    description: "Renewal of Curefab website",
    projectlink:"projects/project1",
    link: "http://curefab.com/",
  },
  {
    title: "Project B",
    description: "Description for Project B",
    projectlink:"projects/project2",
    link: "http://example.com/project-b",
  },
  // ... add more projects as needed
];

export default function Projects() {
  return (
    <>
      <div>
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </div>
    </>
  );
}
