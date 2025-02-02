import logo from "../assets/logo.svg";
import { useContext } from "react";
import UserContext from "../utilis/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { useSelector } from "react-redux";
import useToggle from "../utilis/useToggle";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isShowSidebar, toggleSidebar] = useToggle();

  // subscribing to cart from redux store
  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  const authenticatedUserData = useContext(UserContext);
  const { loggedInUser, handleSignOut } = authenticatedUserData;

  return (
    <div className="header h-24 sticky top-0 z-50 bg-[hsla(0,0%,100%,0.8)] backdrop-blur-xl flex justify-between shadow-md">
      <div className="logo-container w-28 py-1 px-2">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="logo h-full w-full"
          ></img>
        </Link>
      </div>
      <nav className="nav-items flex">
        <ul className="hidden md:flex h-[100%]">
          <li className="self-center">
            {" "}
            {onlineStatus ? "🟢Online" : "🔴Offline"}
          </li>
          <Link to="/about">
            <li className="hover:text-slate-600 hover:underline px-5 h-full grid place-content-center">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-slate-600 hover:underline px-5 h-full grid place-content-center">
              Contact
            </li>
          </Link>
          <Link to="/grocery">
            <li className="hover:text-slate-600 hover:underline px-5 h-full grid place-content-center">
              Grocery
            </li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-slate-600 hover:underline px-5 grid place-content-center h-full">
              Cart({cartItems?.length})
            </li>
          </Link>
        </ul>
        <div className="profile-icon-wrapper grid place-content-center px-3">
          <div
            className="profile-icon grid place-content-center font-bold w-12 h-12 text-sm border-slate-300 border-8 rounded-full cursor-pointer text-white bg-slate-500"
            onClick={toggleSidebar}
          >
            {loggedInUser ? loggedInUser?.name[0] : "User"}
          </div>
        </div>
      </nav>
      <Sidebar
        isShowSidebar={isShowSidebar}
        toggleSidebar={toggleSidebar}
        loggedInUser={loggedInUser}
        handleSignOut={handleSignOut}
      />
    </div>
  );
};

export default Header;
