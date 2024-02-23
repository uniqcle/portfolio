import { useEffect } from "react";
import ProjectDetail from "../components/projectDetail/ProjectDetail";
import { useParams } from "react-router-dom";

import { filterProjectList } from "../helpers/filterList";

const ProjectDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);

      const projectDetailID = filterProjectList(id);
      console.log(projectDetailID);
    }
  }, []);

  return (
    <>
      <ProjectDetail />
    </>
  );
};

export default ProjectDetailPage;
