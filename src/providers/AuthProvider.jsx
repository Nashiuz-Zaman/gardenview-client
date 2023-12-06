// react imports
import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// create auth context
export const AuthContext = createContext();

// create auth instance
const auth = getAuth(app);

// create google provider instance
const googleProvider = new GoogleAuthProvider();

// hooks
import useAxiosPublic from "../hooks/useAxiosPublic";

// auth provider starts here
const AuthProvider = ({ children }) => {
  // should user exist
  const [userShouldExist, setUserShouldExist] = useState(false);

  // does user exist on database at the time of registration?
  // check this state
  const [userAlreadyRegistered, setUserAlreadyRegistered] = useState(false);

  console.log(userAlreadyRegistered);
  //  user/members/admin  profile information
  const [profileData, setProfileData] = useState(null);

  // current user state
  const [user, setUser] = useState(null);

  // app loading state
  const [appLoading, setAppLoading] = useState(true);

  // axios
  const axiosPublic = useAxiosPublic();

  // if there is a jwt token in localstorage then user should exist
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserShouldExist(true);
    }
  }, []);

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curUser) => {
      if (curUser) {
        setUser(curUser);

        // this code should only run when the website is refreshed
        if (!profileData && userShouldExist) {
          // check which firebase user is logged in, send the email to database and bring their profile data
          const userCheckResponse = await axiosPublic.post("/login", {
            email: curUser.email,
          });

          setProfileData(userCheckResponse.data.user);
          setAppLoading(false);
        }
      } else {
        setUser(null);
        setAppLoading(false);
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [axiosPublic, userShouldExist, profileData]);

  // login with google function
  const loginGoogle = () => {
    setAppLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user creation with email and password
  const signup = (email, password) => {
    setAppLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const login = (email, password) => {
    setAppLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update function
  const updateUserProfile = (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  // user logout function
  const logout = () => {
    setAppLoading(true);
    signOut(auth)
      .then(() => {
        setProfileData(null);
        setUserShouldExist(false);
        setUser(null);
        localStorage.removeItem("token");
        setAppLoading(false);
      })
      .catch((error) => console.error(error));
  };

  // pass all the necessary things to the context provider through an object
  const authObj = {
    user,
    auth,
    setUser,
    signup,
    appLoading,
    setAppLoading,
    logout,
    login,
    updateUserProfile,
    loginGoogle,
    userAlreadyRegistered,
    setUserAlreadyRegistered,
    profileData,
    setProfileData,
    userShouldExist,
    setUserShouldExist,
  };

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
