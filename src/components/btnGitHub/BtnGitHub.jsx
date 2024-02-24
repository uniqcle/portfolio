import github from "../../imgs/icons/git-white.png";
import githubFooter from "../../imgs/icons/github-footer.png";

const BtnGitHub = ({ link, repoName, footer }) => {
  return (
    <>
      <a
        href={link}
        className={!footer && "btn-outline"}
        target="_blank"
        rel="noreferrer"
      >
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
