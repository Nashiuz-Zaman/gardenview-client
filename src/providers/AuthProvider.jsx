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
  // what kind of user role user/member/admin
  const [userRole, setUserRole] = useState(null);

  // current user state
  const [user, setUser] = useState(null);

  // app loading state
  const [appLoading, setAppLoading] = useState(true);

  // axios
  const axiosPublic = useAxiosPublic();

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curUser) => {
      if (curUser) {
        setUser(curUser);
        // if userRole is not found do this
        if (userRole === null) {
          const roleCheckResponse = await axiosPublic.post("/role", {
            email: curUser.email,
          });

          // if cannot find user data in role check then it's the first time the user is registering as the data hasn't been written in data base yet. since its a new user, set role to basic "user"
          if (roleCheckResponse.data.user === null) {
            setUserRole("user");
            setAppLoading(false);
          } else {
            // set role
            setUserRole(roleCheckResponse.data.user.role);
            setAppLoading(false);
          }

          return;
        } else {
          setAppLoading(false);
        }
      } else {
        setAppLoading(false);
        setUser(null);
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [userRole, axiosPublic]);

  // does user exist on database at the time of registration?
  // check this state
  const [userExists, setUserExists] = useState(false);

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
    setUserRole(null);
    localStorage.removeItem("token");
    return signOut(auth);
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

    userExists,
    setUserExists,
    userRole,
    setUserRole,
  };

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
