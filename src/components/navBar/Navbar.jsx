import { NavLink } from "react-router-dom";
import "./style.css";

import sun from "../../imgs/icons/sun.svg";
import moon from "../../imgs/icons/moon.svg";

const setActiveLink = ({ isActive }) => {
  return isActive ? "nav-list__link nav-list__link--active" : "nav-list__link";
};

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>Uniqcle</strong> Portfolio
          </NavLink>

          <button className="dark-mode-btn ">
            <img src={sun} className="dark-mode-btn_icon" alt="" />
            <img src={moon} className="dark-mode-btn_icon" alt="" />
          </button>

          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink to="/projects" className={setActiveLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/skills" className={setActiveLink}>
                Skills
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/contacts" className={setActiveLink}>
                Contacts
              </NavLink>
            </li>
          </ul>

          <button className="mobile-nav__button">
            <span className="nav-button__icon"></span>
          </button>

          <div className="mobile-nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <NavLink to="/projects" className={setActiveLink}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink to="/skills" className={setActiveLink}>
                  Skills
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink to="/contacts" className={setActiveLink}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
