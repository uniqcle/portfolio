import { useEffect, useRef } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";
import { useLocalStorage } from "../../utils/useLocalStorage";

const BtnDarkMode = () => {
  //const [darkMode, setDarkMode] = useState("light");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((state) => (state === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button ref={btnRef} className="dark-mode-btn " onClick={toggleDarkMode}>
        <img src={sun} className="dark-mode-btn_icon" alt="" />
        <img src={moon} className="dark-mode-btn_icon" alt="" />
      </button>
    </>
  );
};

export default BtnDarkMode;
