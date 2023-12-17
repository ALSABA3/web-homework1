import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="fixed-top">
      <div className="brand-name">
        <a href="/">Space Groove</a>
      </div>
      <div>
        <ul className="Nav-links">
          <li>
            <a href="#Landing">About</a>
          </li>
          <li>
            <a href="#Product">Product</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
