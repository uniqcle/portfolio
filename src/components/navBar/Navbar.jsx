import "./style.css";

import sun from "../../imgs/icons/sun.svg";
import moon from "../../imgs/icons/moon.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a className="logo" href="./index.html">
            <strong>Uniqcle</strong> Portfolio
          </a>

          <button className="dark-mode-btn ">
            <img src={sun} className="dark-mode-btn_icon" alt="" />
            <img src={moon} className="dark-mode-btn_icon" alt="" />
          </button>

          <ul className="nav-list">
            <li className="nav-list-item">
              <a
                href="./projects.html"
                className="nav-list__link nav-list__link--active"
              >
                Projects
              </a>
            </li>
            <li className="nav-list-item">
              <a href="./skills.html" className="nav-list__link">
                Skills
              </a>
            </li>
            <li className="nav-list-item">
              <a href="./contacts.html" className="nav-list__link">
                Contacts
              </a>
            </li>
          </ul>

          <button className="mobile-nav__button">
            <span className="nav-button__icon"></span>
          </button>

          <div className="mobile-nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="./projects.html" className="nav-list__link">
                  Projects
                </a>
              </li>
              <li className="nav-list-item">
                <a href="./skills.html" className="nav-list__link">
                  Skills
                </a>
              </li>
              <li className="nav-list-item">
                <a href="./contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
