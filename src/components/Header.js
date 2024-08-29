import logo from "../assets/logo.svg";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { auth, db } from "./Firebase";
import { getDoc, doc } from "firebase/firestore";

const Header = () => {
  // const [isSignedIn, setisSignedIn] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);


  const fetchUserData = async () => {
    console.log("fetching user data...");
    try {
      auth.onAuthStateChanged(async (user) => {
        if (!user) return;
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User nt signed in");
        }
      });
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchUserData();
  },[]);

  const handleSignOut = async () => {
    try{
      await auth.signOut();
      setUserDetails(null);
    alert('signed out!')
    }catch(error){
      console.error(`Error logging out: ${error}`)
    }
  }

  return (
    <div className="header sticky top-0 z-50 bg-[hsla(0,0%,100%,0.8)]  backdrop-blur-xl flex justify-between shadow-md ">
      <div className="logo-container w-28 p-5">
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
          <li> {onlineStatus ? "🟢Online" : "🔴Offline"}</li>
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
              
              <Link to="/signup">
                <button className="shadow-lg p-2 rounded-md">Sign Up</button>
              </Link>
              <button className="shadow-lg p-2 rounded-md" onClick={handleSignOut}>Sign out</button>

            </div>
          </div>

          <li>
            Hello, {data.loggedInUser} {userDetails?.name}
          </li>

          {/* hamburger btn */}
          <button
            type="button"
            onClick={handleHamburgerClick}
            className=" text-gray-500 md:hidden"
          >
            {hamburgerOpen ? (
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
          <div
            className={`${
              hamburgerOpen ? "block" : "hidden"
            } absolute top-full w-1/2 right-0 z-10`}
          >
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
              <Link to="/signup">
                <button className="shadow-lg p-2 rounded-md">Sign Up</button>
              </Link>
              <button className="shadow-lg p-2 rounded-md" onClick={handleSignOut}>Sign out</button>

            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
