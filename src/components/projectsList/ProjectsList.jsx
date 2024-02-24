import { useState, useContext } from "react";
import { ProjectContext } from "../../App";
import { useLocalStorage } from "../../utils/useLocalStorage";
import Filter from "../filter/Filter";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsList = () => {
  const projects = useContext(ProjectContext);
  //const [filter, setFilter] = useState("all");
  const [filter, setFilter] = useLocalStorage("filter", "all");

  const changeFilter = (filter) => {
    setFilter(filter);
    console.log(filter);
  };

  const filterProjects = (projects, filter) => {
    switch (filter) {
      case "js":
        return projects.filter((p) => p.filter === "js");
      case "react":
        return projects.filter((p) => p.filter === "react");
      case "bitrix":
        return projects.filter((p) => p.filter === "bitrix");
      case "htmlcss":
        return projects.filter((p) => p.filter === "htmlcss");
      default:
        return projects;
    }
  };

  const renderedProjects = () => {
    const filtered = filterProjects(projects, filter);

    return filtered.map((project) => {
      return <ProjectCard key={project.id} project={project} />;
    });
  };

  return (
    <>
      <main className="section">
        <div className="container">
          <div className="filter">
            <Filter changeFilter={changeFilter} filter={filter} />
          </div>

          <ul className="projects">{projects && renderedProjects()}</ul>
        </div>
      </main>
    </>
  );
};

export default ProjectsList;
