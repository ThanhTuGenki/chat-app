import React, { useState, useEffect, createContext, Children } from "react";
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unsubscibeb = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
        return;
      }
      setIsLoading(false);
      history.push("/login");
    });

    return () => {
      unsubscibeb();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
