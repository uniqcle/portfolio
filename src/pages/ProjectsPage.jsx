import ProjectsList from "../components/projectsList/ProjectsList";
import { projectsList } from "../helpers/projectList";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsList projects={projectsList} />
    </>
  );
};

export default ProjectsPage;
