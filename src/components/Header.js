import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Order</Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
