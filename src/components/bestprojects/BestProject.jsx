import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../App";

const BestProjects = () => {
  const [best, setBest] = useState([]);
  const projects = useContext(ProjectContext);

  const filterByBest = () => {
    const bestProjects = projects.filter((p) => p.best === true);

    setBest(bestProjects);
  };

  const renderBest = (bestProjects) => {
    const bestItems = bestProjects.map((p) => {
      console.log(p);
      const { id, title, img } = p;
      return (
        <li key={id} className="project">
          <Link to={`projects/${id}`}>
            <img src={img} className="project__img" alt={title} />
            <h3 className="project__title">{title}</h3>
          </Link>
        </li>
      );
    });

    return <ul className="projects">{bestItems}</ul>;
  };

  useEffect(() => {
    filterByBest();
  }, []);

  const items = renderBest(best);

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-h1">Best Projects</h1>

        {items}

        <div>
          <Link to="projects" className="btn-all">
            See all projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BestProjects;
