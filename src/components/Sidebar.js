import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";

const Sidebar = ({
  isShowSidebar,
  toggleSidebar,
  loggedInUser,
  handleSignOut,
}) => {
  const sidebarStyle = {
    transform: isShowSidebar ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.4s ease",
  };

  return (
    <div
      className="side-bar-wrapper fixed top-0 bottom-0 right-0 left-0 w-screen flex"
      style={sidebarStyle}
    >
      <div
        className="empty-clickable-toggle-area grow h-screen"
        onClick={toggleSidebar}
      ></div>
      <div className="side-bar shadow-md h-screen w-3/5 md:w-2/5 lg:w-1/4 bg-[hsla(0,0%,100%)]">
        <img
          src={closeIcon}
          alt=""
          className="close-icon w-8 h-8 absolute top-4 right-3 md:top-5 md:right-5 cursor-pointer"
          onClick={toggleSidebar}
        ></img>

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
              <Link
                style={{ display: "block", margin: "0 1rem" }}
                to="/signup"
              >
                <button className="p-2 mt-3 mb-6 w-[100%] rounded-md bg-slate-100 hover:bg-slate-200">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
