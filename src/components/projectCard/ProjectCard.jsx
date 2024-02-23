import "./style.css";

const ProjectCard = ({ project }) => {
  console.log(project);

  return (
    <>
      <li className="project">
        <a href="#">
          <img src={project.img} className="project__img" alt={project.title} />
          <h3 className="project__title">{project.title}</h3>
        </a>
      </li>
    </>
  );
};

export default ProjectCard;
