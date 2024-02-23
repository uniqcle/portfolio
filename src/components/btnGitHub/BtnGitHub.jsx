import github from "../../imgs/icons/git-white.png";
import githubFooter from "../../imgs/icons/git.png";

const BtnGitHub = ({ link, repoName, footer }) => {
  return (
    <>
      <a href={link} className="btn-outline" target="_blank">
        {repoName === "website" ? (
          ""
        ) : (
          <img src={footer ? githubFooter : github} alt="uniqcle portfolio" />
        )}
        {repoName}
      </a>
    </>
  );
};

export default BtnGitHub;
