import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(credential.user);
      const token = await credential.user.getIdToken();
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error creating user:", error.message);
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(credential.user);
      const token = await credential.user.getIdToken();
      localStorage.setItem("token", token);
      window.location.href = "/"; // Redirect to home page after login
    } catch (error) {
      console.error("Error signing in:", error.message);
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out:", error.message);
      setLoading(false);
    }
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        const userEmail = currentUser.email;
        const loggedUser = { email: userEmail };
        try {
          const response = await axios.post(
            "http://localhost:5000/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          );
          console.log("Token response", response.data);
        } catch (error) {
          console.error("Error issuing token:", error.message);
        }
      } else {
        try {
          const response = await axios.post(
            "http://localhost:5000/logout",
            {},
            {
              withCredentials: true,
            }
          );
          console.log("Logout response", response.data);
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
