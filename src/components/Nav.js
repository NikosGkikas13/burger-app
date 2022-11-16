import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import user_icon from "../images/nav_user.png";

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="links">
        <Link to="/create-burger">
          <h1>Your burger</h1>
        </Link>
        <Link to="/view-order">
          <h1>View order</h1>
        </Link>
      </div>
      <div className="user">
        <img src={user_icon} alt="" />
        <h1>{user}</h1>
      </div>
    </nav>
  );
};

export default Nav;
