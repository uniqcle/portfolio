import { projectsList } from "./projectList";

function filterProjectList(id) {
  return projectsList.filter((project) => project.id === id);
}

export { filterProjectList };
