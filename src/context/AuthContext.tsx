"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [idToken, setIdToken] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = async (user: User) => {
      const token = await user?.getIdToken();
      setIdToken(token);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getToken(user);
      } else {
        setUser(undefined);
        setIdToken(undefined);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName: string, photoURL: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    }
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        idToken,
        login,
        signup,
        logout,
        updateUserProfile,
        resetPassword,
      }}>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
