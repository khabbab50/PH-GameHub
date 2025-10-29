import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Register from
  const createUserPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in with email password
  const signInWithEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut
  const handleSignOut = () => {
    return signOut(auth)
      .then((res) => {
        toast.success('Signout Succesfull');
      })
      .catch((err) => {
        console.error(err);
        toast.error('e.message');
      });
  };

  // Sign in with google
  const signinWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  // update profile

  const updateUserProfile = async (name, photoURL) => {
    if (!user) return;
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success('successfully');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // forget password
  const forgetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  // Authon state change
  useEffect(() => {
    const sunSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => sunSubscribe();
  }, []);

  // All Auth Info
  const authInformation = {
    user,
    createUserPass,
    signInWithEmailPass,
    signinWithGoogle,
    handleSignOut,
    updateUserProfile,
    forgetPassword,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
