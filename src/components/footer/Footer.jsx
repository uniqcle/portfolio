import BtnGitHub from '../btnGitHub/BtnGitHub';
import "./style.css";


const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <BtnGitHub link={"https://github.com/uniqcle"} footer={true} />
            </li>
          </ul>
          <div className="copyright">
            <p>© {currentDate} uniqcle.ru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
