import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import Button from "./Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <FaTypo3 />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaBars /> : <FaTimes />}
          </div>
          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/services"}
                className={"nav-links"}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/products"}
                className={"nav-links"}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/sign-up"}
                className={"nav-links"}
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle={"btn--outline"}>SignUp</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
