import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const setActiveLink = ({ isActive }) => {
  return isActive ? "nav-list__link nav-list__link--active" : "nav-list__link";
};

const Navbar = () => {
  const [isMobileNavActive, setMobileNav] = useState(null);
  const [isCloseMobileBtn, setCloseMobileBtn] = useState(null);

  const classNamesMobileBtns = isCloseMobileBtn
    ? "mobile-nav__button mobile-nav__button-close"
    : "mobile-nav__button";
  const classNamesMoble = isMobileNavActive
    ? "mobile-nav mobile-nav--active"
    : "mobile-nav";

  const toggle = (e) => {
    e.stopPropagation();

    setMobileNav((state) => !state);
    setCloseMobileBtn((state) => !state);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>Uniqcle</strong> Portfolio
          </NavLink>

          <BtnDarkMode />

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

          <button className={classNamesMobileBtns} onClick={(e) => toggle(e)}>
            <span className="nav-button__icon"></span>
          </button>

          <div className={classNamesMoble}>
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
