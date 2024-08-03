import { LOGO_URL } from "../utilis/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="header flex justify-between shadow-md">
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
            className="shadow-lg p-2 rounded-md "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>Hello, {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
