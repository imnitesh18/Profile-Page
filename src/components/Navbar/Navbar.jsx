import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className={`navbarContainer`}>
      <div className="navbarLeft">
        <img className="logo" src="assets\logo.png" alt="" />
      </div>

      <div className="navbarRight">
        <button className="btn">
          <p className="btnFont">Courses</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
