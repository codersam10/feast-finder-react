import logo from "../assets/logo.svg";
import { useState, useContext } from "react";
import UserContext from "../utilis/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { useSelector } from "react-redux";
import { transcode } from "buffer";

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const sidebarStyle = {
    transform: isShowSidebar ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.4s ease",
  };
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
      <div className="nav-items flex">
        <ul className="hidden md:flex items-center h-[100%] gap-6">
          <li> {onlineStatus ? "🟢Online" : "🔴Offline"}</li>
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
            <li className="hover:text-slate-600">Cart({cartItems?.length})</li>
          </Link>
        </ul>
        <div className="grid place-content-center px-3">
          <div
            className="grid place-content-center px-1 font-bold w-10 h-10 rounded-full cursor-pointer text-white bg-slate-500"
            onClick={() => {
              setIsShowSidebar(true);
            }}
          >
            {loggedInUser ? loggedInUser?.name[0] : "User"}
          </div>
        </div>
      </div>
      <div
      className="side-bar-wrapper fixed top-0 bottom-0 right-0 left-0 w-screen flex"
        style={sidebarStyle}
      >
        <div className="grow h-screen" onClick={() => setIsShowSidebar(false)}>
        </div>
        <div className="side-bar shadow-md h-screen w-2/5 md:w-1/4 bg-[hsla(0,0%,100%)]"
        >
        <svg
          className="w-8 h-8 absolute top-5 right-8 cursor-pointer"
          onClick={() => {
            setIsShowSidebar(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>
        <div className="pt-16 p-3">
          <div className=" rounded-lg overflow-hidden border"> 

            <h2 className="p-2 font-semibold bg-slate-200">
              Hello, {loggedInUser ? loggedInUser?.name : "User"}
            </h2>
            {/* conditionally render signup and signout button */}
            {loggedInUser ? (
              <button
                className="block p-2 mt-3 mb-6 mx-auto w-[90%] rounded-md bg-slate-100"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Link style={{display: "block", margin: "0 1rem" }} to="/signup">
                <button className="p-2 mt-3 mb-6 w-[100%] rounded-md bg-slate-100 hover:bg-slate-200">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
