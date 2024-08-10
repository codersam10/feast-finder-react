import logo from "../assets/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="header sticky top-0 z-10 bg-[hsla(0,0%,100%,0.9)]  backdrop-blur-xl flex justify-between shadow-md ">
      <div className="logo-container w-32">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-items pr-3">
        <ul className="flex items-center h-[100%] gap-6">
          <li> {onlineStatus === false ? "🔴Offline" : "🟢Online"}</li>
          <Link to="/about">
            <li className="hover:text-slate-600">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-slate-600">Contact</li>
          </Link>
          <Link to="/grocery">
            <li className="hover:text-slate-600">Grocery</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-slate-600">Cart</li>
          </Link>

          <button
            className="shadow-lg p-2 rounded-md"
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
