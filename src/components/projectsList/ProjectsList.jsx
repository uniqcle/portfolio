import { useContext } from "react";
import { ProjectContext } from "../../App";
import Filter from "../filter/Filter";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsList = () => {
  const projects = useContext(ProjectContext);

  return (
    <>
      <main className="section">
        <div className="container">
          <div className="filter">
            <Filter />
          </div>

          <ul className="projects">
            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ProjectsList;
