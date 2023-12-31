import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/Layouts.css";
const Layouts = ({ children, login }) => {
  return (
    <div className="App">
      <Navbar login={login} />
      <div className="layout-component">{children}</div>
      <Footer />
    </div>
  );
};

export default Layouts;
