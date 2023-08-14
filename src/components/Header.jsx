import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link className="link" to={"/"}>
        <div className="logo">Todo App.</div>
      </Link>
      <div className="menu">
        <a className="link" href="">
          About Me
        </a>
      </div>
    </nav>
  );
};

export default Header;
