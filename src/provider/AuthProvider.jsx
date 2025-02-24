import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

// ................
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  // ...........
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // .......Signin
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // .........Signout
  const logout = () => {
    return signOut(auth);
  };

  // ..........
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    userLogin,
  };

  // ...........Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
