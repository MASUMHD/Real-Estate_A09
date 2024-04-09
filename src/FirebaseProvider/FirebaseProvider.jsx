import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
//   console.log(user);
    

    
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

 //   Sing in user
  const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }

//   Google sign in
const googleProvider = new GoogleAuthProvider();
const googleLogin = () => {
     
    return signInWithPopup(auth, googleProvider)
}



// GitHub sign In
const gitHubProvider = new GithubAuthProvider();
const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider)
}

// Logout user
const logout = () => {
    setUser(null)
    signOut(auth)
}


  // observer user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
  });

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    gitHubLogin,
    logout,
    user
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
