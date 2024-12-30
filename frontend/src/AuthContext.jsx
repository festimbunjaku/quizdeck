import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  axios.defaults.baseURL = "http://127.0.0.1:8000/api"; 

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token");

      if (token) {
        try {
          const response = await axios.get("/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error("Authentication check failed:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (token) => {
    localStorage.setItem("auth_token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
