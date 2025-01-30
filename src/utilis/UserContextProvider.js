import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "./Firebase";
const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  //set logged in user
  const fetchUserData = async () => {
    console.log("fetching user data...");
    try {
      auth.onAuthStateChanged(async (user) => {
        if (!user) return;
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLoggedInUser(docSnap.data());
        } else {
          console.log("User not signed in");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  //sign out
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setLoggedInUser(null);
      alert("signed out!");
    } catch (error) {
      console.error(`Error logging out: ${error}`);
    }
  };

  return (
    // prettier-ignore
    <UserContext.Provider value={{loggedInUser, handleSignOut}}>
        {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
