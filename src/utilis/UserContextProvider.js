import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "./Firebase";
const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

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

  return (
    // prettier-ignore
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
