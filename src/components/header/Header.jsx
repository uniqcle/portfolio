import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Andrey</em>{" "}
          </strong>{" "}
          <br />
          frontend developer
        </h1>
        <div className="header__text">
          <p id="runningString">
            First, solve the problem. Then, write the code.{" "}
          </p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
