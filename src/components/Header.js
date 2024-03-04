import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("header rendered");
  return (
    <div className="header flex justify-between shadow-md bg-orange-100">
      <div className="logo-container w-32">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-items pr-3">
        <ul className="flex items-center h-[100%] gap-6">
          <li>Status: {onlineStatus === false ? "🔴" : "🟢"}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
