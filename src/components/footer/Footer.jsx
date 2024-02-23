import BtnGitHub from '../btnGitHub/BtnGitHub';
import "./style.css";


const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <BtnGitHub/>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 uniqcle.ru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
