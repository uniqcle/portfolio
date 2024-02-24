import { useContext } from "react";
import ProjectDetail from "../components/projectDetail/ProjectDetail";
import { useParams } from "react-router-dom";

import { ProjectContext } from "../App";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projects = useContext(ProjectContext);

  const project = projects.find((p) => {
    return p.id === +id;
  });

  return (
    <>
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectDetailPage;
