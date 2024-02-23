import "./style.css";
import BtnGitHub from "./../btnGitHub/BtnGitHub";

const ProjectDetail = ({ project }) => {
  const { title, img, id, skills, website, gitHubLink } = project;
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-h1">{project.title}</h1>
            <img src={img} alt={title} />
            <div className="project-details__desc">
              <p>{skills.join(", ")}</p>
            </div>
            {gitHubLink ? (
              <BtnGitHub
                link={gitHubLink}
                repoName={"GitHub repo"}
                classNames={"btn-outline"}
              />
            ) : (
              <BtnGitHub
                link={website}
                repoName={"website"}
                classNames={"btn-outline"}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
