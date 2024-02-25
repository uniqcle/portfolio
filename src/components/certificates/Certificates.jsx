import "./style.css";
import js from "../../upload/js.png";
import jsBig from "../../upload/js-big.png";
import react from "../../upload/react.png";
import reactBig from "../../upload/react-big.png";
import bitrix from "../../upload/bitrix.png";

const Certificates = () => {
  return (
    <>
      <div className="certs">
        <div className="cert">
          <a href={jsBig} target="_blank">
            <img src={js} alt="javascript certificate" />
          </a>
        </div>
        <div className="cert">
          <a href={reactBig} target="_blank">
            <img src={react} alt="react certificate" />
          </a>
        </div>
        <div className="cert">
          <a href="/upload/bitrix-cert.pdf" target="_blank">
            <img src={bitrix} alt="react certificate" />
          </a>
        </div>
        <div className="cert"></div>
      </div>
    </>
  );
};

export default Certificates;
