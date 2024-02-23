import { Link } from "react-router-dom";
import "./style.css";

const ProjectCard = ({ project }) => {
  const { id, img, title } = project;

  return (
    <>
      <li className="project">
        <Link to={`${id}`}>
          <img src={img} className="project__img" alt={title} />
          <h3 className="project__title">{title}</h3>
        </Link>
      </li>
    </>
  );
};

export default ProjectCard;
