import { Outlet } from "react-router-dom";

import NavBar from "../navBar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="App">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
