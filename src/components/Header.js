import logo from "../assets/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

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
        <ul className="items-center h-[100%] flex gap-6">
          <li> {onlineStatus === false ? "🔴Offline" : "🟢Online"}</li>
          <div className="hidden md:block">
            <div className="flex items-center gap-6">
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
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </div>
          </div>

          <li>Hello, {data.loggedInUser}</li>

          {/* hamburger btn */}
          <button
            type="button"
            onClick={handleHamburgerClick}
            className=" text-gray-500 md:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            ) : (
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
          </button>

          {/* hamburger menu */}
          <div className={`${isOpen ? "block" : "hidden"} absolute top-full w-1/2 right-0 z-10`}>
            <div className="flex flex-col gap-5 bg-[hsla(0,0%,100%,0.9)] text-center border-2 border-slate-500 md:hidden p-4 rounded-lg">
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
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </div>
          </div>

        </ul>
      </div>
    </div>
  );
};

export default Header;
