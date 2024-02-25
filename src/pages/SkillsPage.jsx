import Certificates from "../components/certificates/Certificates";

const SkillsPage = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-h1">Skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-h2">Frontend</h2>
              <p>
                JavaScript, React, Redux, TypeScript, HTML, CSS, SASS, NPM,
                BootStrap, TailwindCSS, StyledComponents, GULP
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-h2">Backend</h2>
              <p>PHP, MySQL, Yii2, Bitrix, NodeJS</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-h2">Сertificates</h2>
              <Certificates />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default SkillsPage;
