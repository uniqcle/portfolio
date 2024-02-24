import { useEffect } from "react";
import "./style.css";

const Header = () => {
  useEffect(() => {
    const runningString = document.querySelector("#runningString");
    const runningStringText = "First, solve the problem. Then, write the code.";
    let index = 0;

    function runString() {
      runningString.innerText = runningStringText.slice(0, index);
      index++;
    }

    runString();

    let intervalId = setInterval(runString, 100);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 7000);
  }, []);

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
