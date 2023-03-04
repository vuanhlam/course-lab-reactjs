import "../../App.css";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

function Layout() {
  const { themeUI } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <main
        className="body"
        style={{
          backgroundColor: themeUI.backgroundColor,
          color: themeUI.color,
        }}
      >
        <Outlet />
      </main>
      <div className="concord-img-gradient"></div>
      <Footer />
    </>
  );
}

export default Layout;
